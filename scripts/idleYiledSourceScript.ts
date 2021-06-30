import hre from "hardhat";

import PoolWithMultipleWinnersBuilder from '@pooltogether/pooltogether-contracts/deployments/mainnet/PoolWithMultipleWinnersBuilder.json';
import RNGBlockhash from '@pooltogether/pooltogether-rng-contracts/deployments/mainnet/RNGBlockhash.json';
import ControlledToken from '@pooltogether/pooltogether-contracts/abis/ControlledToken.json';
import MultipleWinners from '@pooltogether/pooltogether-contracts/abis/MultipleWinners.json';
import YieldSourcePrizePool from '@pooltogether/pooltogether-contracts/abis/YieldSourcePrizePool.json';

import { dai } from '@studydefi/money-legos/erc20';
import { info, success } from './helpers';
import IdleYieldSourceAbi from '../abis/IYieldSource.json';
import daiAbi from '../abis/daiAbi.json';
import { BigNumber } from "ethers";

async function main() {
  const ethers = hre.ethers
  let accounts = await ethers.getSigners();
  const accountToImpersonate = '0xF977814e90dA44bFA03b6295A0616a897441aceC' // dai rich
  const idleToken = '0x3fE7940616e5Bc47b0775a0dccf6237893353bB4' //idleDai

  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [accountToImpersonate]
  })
  let signer = await ethers.provider.getSigner(accountToImpersonate)

  const { constants, provider, getContractAt, getContractFactory, getSigners, utils } = ethers;
  const [contractsOwner] = await getSigners();
  const { AddressZero } = constants;
  const { getBlock, getBlockNumber, getTransactionReceipt, send } = provider;

  let daiContract = await getContractAt(dai.abi, dai.address, signer);
  await daiContract.transfer(accounts[0].address, daiContract.balanceOf(accountToImpersonate))
  signer = await ethers.provider.getSigner(accounts[0].address)
  daiContract = new ethers.Contract(dai.address, dai.abi, signer)

  info('Deploying IdleYieldSource...');

  let IdleYieldSource = await ethers.getContractFactory('IdleYieldSource', signer);
  let IdleYieldSource_Instance = await IdleYieldSource.deploy();

  let genericProxyFactoryContract = await ethers.getContractFactory('GenericProxyFactory');
  let hardhatGenericProxyFactory = await genericProxyFactoryContract.deploy()

  let hardhatIdleYieldSourceProxyFactory = await ethers.getContractFactory('IdleYieldSourceProxyFactory', signer);
  let hardhatIdleYieldSourceProxyFactory_Instance = await hardhatIdleYieldSourceProxyFactory.deploy(hardhatGenericProxyFactory.address);

  let createProxyTx = await hardhatIdleYieldSourceProxyFactory_Instance.createNewProxy()
  const receipt = await provider.getTransactionReceipt(createProxyTx.hash);

  const proxyCreatedEvent = hardhatGenericProxyFactory.interface.parseLog(
    receipt.logs[0],
  );

  const proxyIdleYieldSource = await getContractAt(
    IdleYieldSourceAbi,
    proxyCreatedEvent.args[0],
    contractsOwner,
  );

  await proxyIdleYieldSource.initialize(idleToken)

  info('Deploying IdleYieldSourcePrizePool...');

  const poolBuilder = await getContractAt(
    PoolWithMultipleWinnersBuilder.abi,
    PoolWithMultipleWinnersBuilder.address,
    contractsOwner,
  );

  const idleYieldSourcePrizePoolConfig = {
    yieldSource: proxyCreatedEvent.args[0],
    maxExitFeeMantissa: ethers.utils.parseUnits('0.5', 18),
    maxTimelockDuration: 1000,
  };

  const block = await getBlock(await getBlockNumber());
  const multipleWinnersConfig = {
    rngService: RNGBlockhash.address,
    prizePeriodStart: block.timestamp,
    prizePeriodSeconds: 60,
    ticketName: 'Ticket',
    ticketSymbol: 'TICK',
    sponsorshipName: 'Sponsorship',
    sponsorshipSymbol: 'SPON',
    ticketCreditLimitMantissa: ethers.utils.parseEther('0.1'),
    ticketCreditRateMantissa: ethers.utils.parseEther('0.001'),
    numberOfWinners: 1,
  };

  const yieldSourceMultipleWinnersTx = await poolBuilder.createYieldSourceMultipleWinners(
    idleYieldSourcePrizePoolConfig,
    multipleWinnersConfig,
    18,
  );

  const yieldSourceMultipleWinnersReceipt = await getTransactionReceipt(
    yieldSourceMultipleWinnersTx.hash,
  );

  const yieldSourcePrizePoolInitializedEvent = yieldSourceMultipleWinnersReceipt.logs.map(
    (log) => {
      try {
        return poolBuilder.interface.parseLog(log);
      } catch (e) {
        return null;
      }
    },
  );

  const prizePool = await getContractAt(
    YieldSourcePrizePool,
    yieldSourcePrizePoolInitializedEvent[yieldSourcePrizePoolInitializedEvent.length - 1]?.args[
      'prizePool'
    ],
    contractsOwner,
  );
  success(`Deployed idleYieldSourcePrizePool! ${prizePool.address}`);

  const prizeStrategy = await getContractAt(
    MultipleWinners,
    await prizePool.prizeStrategy(),
    contractsOwner,
  );
  await prizeStrategy.addExternalErc20Award(dai.address);

  const daiAmount = ethers.utils.parseUnits('100000', 18);
  await daiContract.approve(prizePool.address, daiAmount);

  info(`Depositing ${ethers.utils.formatUnits(daiAmount, 18)} DAI...`);

  await prizePool.depositTo(
    contractsOwner.address,
    daiAmount,
    await prizeStrategy.ticket(),
    AddressZero,
  );

  success('Deposited DAI!');

  info(`Prize strategy owner: ${await prizeStrategy.owner()}`);

  // simulating returns in the vault during the prizePeriod
  const daiProfits = ethers.utils.parseUnits('100000', 18);
  info(`yVault generated ${ethers.utils.formatUnits(daiProfits, 18)} DAI`);

  await send('evm_increaseTime', [10000]);
  await send('evm_mine', []);

  info('Starting award...');
  await prizeStrategy.startAward();

  await send('evm_increaseTime', [100000]);
  await send('evm_mine', []);

  info('Completing award...');
  const awardTx = await prizeStrategy.completeAward();
  const awardReceipt = await getTransactionReceipt(awardTx.hash);
  const awardLogs = awardReceipt.logs.map(log => {
    try
      { return prizePool.interface.parseLog(log) }
    catch (e)
    { return null }
  })
  const awarded = awardLogs.find(event => event && event.name === 'Awarded')
  if (awarded) {
    console.log(`Awarded ${ethers.utils.formatUnits(awarded.args.amount, 18)} token`)
  } else {
    console.log(`No prizes`)
  }

  info('Withdrawing...');
  const ticketAddress = await prizeStrategy.ticket();

  const ticket = await getContractAt(ControlledToken, ticketAddress, contractsOwner);
  const withdrawalAmount = ethers.utils.parseUnits('100000', 18);
  const earlyExitFee = await prizePool.callStatic.calculateEarlyExitFee(contractsOwner.address, ticket.address, withdrawalAmount);

  const ticketContract = await getContractAt(daiAbi, ticket.address, contractsOwner);
  const ticketBal0 = await ticketContract.balanceOf(accounts[0].address)
  console.log('Ticket Balance and Exit Fee', ticketBal0.toString(), earlyExitFee.exitFee.toString())

  const withdrawAmt = BigNumber.from(ticketBal0.toString())
                        .sub(BigNumber.from(earlyExitFee.exitFee.toString()))
  console.log('WithdrawAmt', withdrawAmt.toString())

  await send('evm_increaseTime', [100000]);
  await send('evm_mine', []);

  const withdrawTx = await prizePool.withdrawInstantlyFrom(
    contractsOwner.address,
    withdrawAmt,
    ticket.address,
    earlyExitFee.exitFee,
  );

  const withdrawReceipt = await getTransactionReceipt(withdrawTx.hash);
  const withdrawLogs = withdrawReceipt.logs.map((log) => {
    try {
      return prizePool.interface.parseLog(log);
    } catch (e) {
      return null;
    }
  });

  const withdrawn = withdrawLogs.find((event) => event && event.name === 'InstantWithdrawal');
  success(`Withdrawn ${ethers.utils.formatUnits(withdrawn?.args?.redeemed, 18)} DAI!`);
  success(`Exit fee was ${ethers.utils.formatUnits(withdrawn?.args?.exitFee, 18)} DAI`);

  await prizePool.captureAwardBalance();
  const awardBalance = await prizePool.callStatic.awardBalance();
  console.log('awardBalance', awardBalance.toString())

  success(`Current awardable balance is ${ethers.utils.formatUnits(awardBalance, 18)} DAI`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});
