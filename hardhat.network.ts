import { HardhatUserConfig } from 'hardhat/config';

const alchemyUrl = process.env.ALCHEMY_URL;
const infuraApiKey = process.env.INFURA_API_KEY;
const mnemonic = process.env.HDWALLET_MNEMONIC;

const networks: HardhatUserConfig['networks'] = {
  coverage: {
    url: 'http://127.0.0.1:8555',
    blockGasLimit: 200000000,
    allowUnlimitedContractSize: true,
  },
  localhost: {
    chainId: 1,
    url: 'http://127.0.0.1:8545',
    allowUnlimitedContractSize: true,
  },
};

if (alchemyUrl && process.env.FORK_ENABLED && mnemonic) {
  networks.hardhat = {
    chainId: 1,
    forking: {
      url: alchemyUrl,
      // blockNumber: 12226812
    },
    accounts: {
      mnemonic,
    },
  };
}  else {
  networks.hardhat = {
    allowUnlimitedContractSize: true,
  };
}

if (infuraApiKey && mnemonic) {
  networks.kovan = {
    url: `https://kovan.infura.io/v3/${infuraApiKey}`,
    accounts: {
      mnemonic,
    },
  };

  networks.ropsten = {
    url: `https://ropsten.infura.io/v3/${infuraApiKey}`,
    accounts: {
      mnemonic,
    },
  };

  networks.rinkeby = {
    url: `https://rinkeby.infura.io/v3/${infuraApiKey}`,
    accounts: {
      mnemonic,
    },
  };

  networks.mainnet = {
    url: alchemyUrl,
    accounts: {
      mnemonic,
    },
  };
} else {
  console.warn('No infura or hdwallet available for testnets');
}

export default networks;
