/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { IdleYieldSourceHarness } from "../IdleYieldSourceHarness";

export class IdleYieldSourceHarness__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _idleToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IdleYieldSourceHarness> {
    return super.deploy(
      _idleToken,
      overrides || {}
    ) as Promise<IdleYieldSourceHarness>;
  }
  getDeployTransaction(
    _idleToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_idleToken, overrides || {});
  }
  attach(address: string): IdleYieldSourceHarness {
    return super.attach(address) as IdleYieldSourceHarness;
  }
  connect(signer: Signer): IdleYieldSourceHarness__factory {
    return super.connect(signer) as IdleYieldSourceHarness__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IdleYieldSourceHarness {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IdleYieldSourceHarness;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_idleToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousAssetManager",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAssetManager",
        type: "address",
      },
    ],
    name: "AssetManagerTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "idleToken",
        type: "address",
      },
    ],
    name: "IdleYieldSourceInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RedeemedToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Sponsored",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "SuppliedTokenTo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "TransferredERC20",
    type: "event",
  },
  {
    inputs: [],
    name: "ONE_IDLE_TOKEN",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "assetManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "balanceOfToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "idleToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_idleToken",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
      },
    ],
    name: "redeemToken",
    outputs: [
      {
        internalType: "uint256",
        name: "redeemedUnderlyingAsset",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAssetManager",
        type: "address",
      },
    ],
    name: "setAssetManager",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "sharesToToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sponsor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "supplyTokenTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "tokenToShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlyingAsset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620021d4380380620021d48339810160408190526200003491620000ed565b60ca80546001600160a01b0319166001600160a01b03831690811790915560408051637e062a3560e11b8152905163fc0c546a916004808201926020929091908290030181600087803b1580156200008b57600080fd5b505af1158015620000a0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c69190620000ed565b60cb80546001600160a01b0319166001600160a01b0392909216919091179055506200011d565b600060208284031215620000ff578081fd5b81516001600160a01b038116811462000116578182fd5b9392505050565b6120a7806200012d6000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80637158da7c11610104578063a457c2d7116100a2578063c4d66de811610071578063c4d66de8146103ea578063c89039c5146103fd578063dd62ed3e1461040e578063f2fde38b1461044757600080fd5b8063a457c2d71461039e578063a9059cbb146103b1578063b6cce5e2146103c4578063b99152d0146103d757600080fd5b80638da5cb5b116100de5780638da5cb5b1461036157806394217ad11461037257806395d89b41146103835780639db5dbe41461038b57600080fd5b80637158da7c1461032c578063749cf4bc1461033f57806387a6eeef1461034e57600080fd5b8063313ce5671161017c578063430602371161014b57806343060237146102d35780636cf81ec6146102e657806370a08231146102f9578063715018a61461032257600080fd5b8063313ce5671461028b578063361bb0c11461029a57806339509351146102ad57806340c10f19146102c057600080fd5b8063095ea7b3116101b8578063095ea7b31461022257806318160ddd1461024557806323b872dd1461024d5780632dd60c5e1461026057600080fd5b8063013054c2146101df578063026c42071461020557806306fdde031461020d575b600080fd5b6101f26101ed366004611e4b565b61045a565b6040519081526020015b60405180910390f35b6101f26105ad565b6102156105bc565b6040516101fc9190611ebb565b610235610230366004611e00565b61064e565b60405190151581526020016101fc565b6067546101f2565b61023561025b366004611dc0565b610664565b60ca54610273906001600160a01b031681565b6040516001600160a01b0390911681526020016101fc565b604051601281526020016101fc565b6101f26102a8366004611e4b565b610717565b6102356102bb366004611e00565b610728565b6102356102ce366004611e00565b61075f565b6102356102e1366004611d50565b61076b565b6101f26102f4366004611e4b565b6107e9565b6101f2610307366004611d50565b6001600160a01b031660009081526065602052604090205490565b61032a6107f4565b005b60cb54610273906001600160a01b031681565b6101f2670de0b6b3a764000081565b61032a61035c366004611e7b565b610868565b6097546001600160a01b0316610273565b60c9546001600160a01b0316610273565b610215610930565b61032a610399366004611dc0565b61093f565b6102356103ac366004611e00565b610ab7565b6102356103bf366004611e00565b610b52565b61032a6103d2366004611e4b565b610b5f565b6101f26103e5366004611d50565b610ba1565b61032a6103f8366004611d50565b610bc3565b60cb546001600160a01b0316610273565b6101f261041c366004611d88565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205490565b61032a610455366004611d50565b610d7f565b6000600260015414156104b45760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260015560006104c483610e6a565b90506104d03382610e90565b60ca546040516345985a8b60e11b8152600481018390526001600160a01b0390911690638b30b51690602401602060405180830381600087803b15801561051657600080fd5b505af115801561052a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054e9190611e63565b60cb54909250610568906001600160a01b03163384610fe8565b604080518281526020810185905233917f5c9b0a8fe13a826ca676f5ad4f98c747b5086beb79ab58589b8211b62fa32fb9910160405180910390a25060018055919050565b60006105b7611050565b905090565b6060606880546105cb9061200b565b80601f01602080910402602001604051908101604052809291908181526020018280546105f79061200b565b80156106445780601f1061061957610100808354040283529160200191610644565b820191906000526020600020905b81548152906001019060200180831161062757829003601f168201915b5050505050905090565b600061065b3384846110cd565b50600192915050565b60006106718484846111e9565b6001600160a01b0384166000908152606660209081526040808320338452909152902054828110156106f65760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084016104ab565b61070a85336107058685611fc8565b6110cd565b60019150505b9392505050565b600061072282610e6a565b92915050565b3360008181526066602090815260408083206001600160a01b0387168452909152812054909161065b918590610705908690611f71565b600061065b83836113c1565b6097546000906001600160a01b031633146107985760405162461bcd60e51b81526004016104ab90611f3c565b60c980546001600160a01b0319166001600160a01b0384169081179091556040516000907fa4d7db5805a7ddee85566735eb5d575b0894cef3fe057b4fa1b52090d8c22068908290a3506001919050565b6000610722826114a0565b6097546001600160a01b0316331461081e5760405162461bcd60e51b81526004016104ab90611f3c565b6097546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3609780546001600160a01b0319169055565b600260015414156108bb5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104ab565b600260015560006108cb83610e6a565b90506108d6836114bd565b506108e182826113c1565b60408051828152602081018590526001600160a01b0384169133917fdef5cc95ad9b1c65c586d0fce815ec764b575719636edf58ff2553ae6f110452910160405180910390a350506001805550565b6060606980546105cb9061200b565b60c9546001600160a01b031633148061096257506097546001600160a01b031633145b6109d45760405162461bcd60e51b815260206004820152603d60248201527f6f6e6c794f776e65724f7241737365744d616e616765723a2063616c6c65722060448201527f6973206e6f74206f776e6572206f72206173736574206d616e6167657200000060648201526084016104ab565b60ca546001600160a01b0384811691161415610a475760405162461bcd60e51b815260206004820152602c60248201527f49646c655969656c64536f757263652f69646c654461692d7472616e7366657260448201526b0b5b9bdd0b585b1b1bddd95960a21b60648201526084016104ab565b610a5b6001600160a01b0384168383610fe8565b826001600160a01b0316826001600160a01b0316336001600160a01b03167f29fcb7bb954d37295343e742bab21760748bdba4e026e4469a8100183996913884604051610aaa91815260200190565b60405180910390a4505050565b3360009081526066602090815260408083206001600160a01b038616845290915281205482811015610b395760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104ab565b610b4833856107058685611fc8565b5060019392505050565b600061065b3384846111e9565b610b68816114bd565b5060405181815233907fbb2c10eb8b0d65523a501a1c079906e38af3c4231e31b799d408daacd7ce72269060200160405180910390a250565b6001600160a01b038116600090815260656020526040812054610722906114a0565b600054610100900460ff1680610bdc575060005460ff16155b610bf85760405162461bcd60e51b81526004016104ab90611eee565b600054610100900460ff16158015610c1a576000805461ffff19166101011790555b610c22611564565b610c6c6040518060400160405280600d81526020016c49646c654d696e74536861726560981b8152506040518060400160405280600381526020016212535560ea1b8152506115e0565b610c7461165f565b60ca80546001600160a01b0319166001600160a01b03841690811790915560408051637e062a3560e11b8152905163fc0c546a916004808201926020929091908290030181600087803b158015610cca57600080fd5b505af1158015610cde573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d029190611d6c565b60cb80546001600160a01b0319166001600160a01b0392831690811790915560ca54610d3192166000196116be565b60ca546040516001600160a01b03909116907f795e3042efad8c5d441d3c1a8cb34f31d2c27dba7a6d188d0242de49b828dcd790600090a28015610d7b576000805461ff00191690555b5050565b6097546001600160a01b03163314610da95760405162461bcd60e51b81526004016104ab90611f3c565b6001600160a01b038116610e0e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104ab565b6097546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3609780546001600160a01b0319166001600160a01b0392909216919091179055565b6000610e746117e2565b610e86670de0b6b3a764000084611fa9565b6107229190611f89565b6001600160a01b038216610ef05760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104ab565b6001600160a01b03821660009081526065602052604090205481811015610f645760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104ab565b610f6e8282611fc8565b6001600160a01b03841660009081526065602052604081209190915560678054849290610f9c908490611fc8565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a3505050565b6040516001600160a01b03831660248201526044810182905261104b90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611813565b505050565b60ca546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a08231906024015b60206040518083038186803b15801561109557600080fd5b505afa1580156110a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b79190611e63565b6001600160a01b03831661112f5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104ab565b6001600160a01b0382166111905760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104ab565b6001600160a01b0383811660008181526066602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259101610fdb565b6001600160a01b03831661124d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104ab565b6001600160a01b0382166112af5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104ab565b6001600160a01b038316600090815260656020526040902054818110156113275760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104ab565b6113318282611fc8565b6001600160a01b038086166000908152606560205260408082209390935590851681529081208054849290611367908490611f71565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516113b391815260200190565b60405180910390a350505050565b6001600160a01b0382166114175760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104ab565b80606760008282546114299190611f71565b90915550506001600160a01b03821660009081526065602052604081208054839290611456908490611f71565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6000670de0b6b3a76400006114b36117e2565b610e869084611fa9565b60cb546000906114d8906001600160a01b03163330856118e5565b60ca54604051632befabbf60e01b81526004810184905260006024820181905260448201526001600160a01b0390911690632befabbf90606401602060405180830381600087803b15801561152c57600080fd5b505af1158015611540573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107229190611e63565b600054610100900460ff168061157d575060005460ff16155b6115995760405162461bcd60e51b81526004016104ab90611eee565b600054610100900460ff161580156115bb576000805461ffff19166101011790555b6115c3611923565b6115cb61198d565b80156115dd576000805461ff00191690555b50565b600054610100900460ff16806115f9575060005460ff16155b6116155760405162461bcd60e51b81526004016104ab90611eee565b600054610100900460ff16158015611637576000805461ffff19166101011790555b61163f611923565b6116498383611a3b565b801561104b576000805461ff0019169055505050565b600054610100900460ff1680611678575060005460ff16155b6116945760405162461bcd60e51b81526004016104ab90611eee565b600054610100900460ff161580156116b6576000805461ffff19166101011790555b6115cb611ad0565b8015806117475750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561170d57600080fd5b505afa158015611721573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117459190611e63565b155b6117b25760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084016104ab565b6040516001600160a01b03831660248201526044810182905261104b90849063095ea7b360e01b90606401611014565b60ca5460405163232e851160e21b81523060048201526000916001600160a01b031690638cba14449060240161107d565b6000611868826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611b3f9092919063ffffffff16565b80519091501561104b57808060200190518101906118869190611e2b565b61104b5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016104ab565b6040516001600160a01b038085166024830152831660448201526064810182905261191d9085906323b872dd60e01b90608401611014565b50505050565b600054610100900460ff168061193c575060005460ff16155b6119585760405162461bcd60e51b81526004016104ab90611eee565b600054610100900460ff161580156115cb576000805461ffff191661010117905580156115dd576000805461ff001916905550565b600054610100900460ff16806119a6575060005460ff16155b6119c25760405162461bcd60e51b81526004016104ab90611eee565b600054610100900460ff161580156119e4576000805461ffff19166101011790555b609780546001600160a01b0319163390811790915560405181906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35080156115dd576000805461ff001916905550565b600054610100900460ff1680611a54575060005460ff16155b611a705760405162461bcd60e51b81526004016104ab90611eee565b600054610100900460ff16158015611a92576000805461ffff19166101011790555b8251611aa5906068906020860190611cb7565b508151611ab9906069906020850190611cb7565b50801561104b576000805461ff0019169055505050565b600054610100900460ff1680611ae9575060005460ff16155b611b055760405162461bcd60e51b81526004016104ab90611eee565b600054610100900460ff16158015611b27576000805461ffff19166101011790555b6001805580156115dd576000805461ff001916905550565b6060611b4e8484600085611b56565b949350505050565b606082471015611bb75760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016104ab565b843b611c055760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104ab565b600080866001600160a01b03168587604051611c219190611e9f565b60006040518083038185875af1925050503d8060008114611c5e576040519150601f19603f3d011682016040523d82523d6000602084013e611c63565b606091505b5091509150611c73828286611c7e565b979650505050505050565b60608315611c8d575081610710565b825115611c9d5782518084602001fd5b8160405162461bcd60e51b81526004016104ab9190611ebb565b828054611cc39061200b565b90600052602060002090601f016020900481019282611ce55760008555611d2b565b82601f10611cfe57805160ff1916838001178555611d2b565b82800160010185558215611d2b579182015b82811115611d2b578251825591602001919060010190611d10565b50611d37929150611d3b565b5090565b5b80821115611d375760008155600101611d3c565b600060208284031215611d61578081fd5b81356107108161205c565b600060208284031215611d7d578081fd5b81516107108161205c565b60008060408385031215611d9a578081fd5b8235611da58161205c565b91506020830135611db58161205c565b809150509250929050565b600080600060608486031215611dd4578081fd5b8335611ddf8161205c565b92506020840135611def8161205c565b929592945050506040919091013590565b60008060408385031215611e12578182fd5b8235611e1d8161205c565b946020939093013593505050565b600060208284031215611e3c578081fd5b81518015158114610710578182fd5b600060208284031215611e5c578081fd5b5035919050565b600060208284031215611e74578081fd5b5051919050565b60008060408385031215611e8d578182fd5b823591506020830135611db58161205c565b60008251611eb1818460208701611fdf565b9190910192915050565b6020815260008251806020840152611eda816040850160208701611fdf565b601f01601f19169190910160400192915050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008219821115611f8457611f84612046565b500190565b600082611fa457634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611fc357611fc3612046565b500290565b600082821015611fda57611fda612046565b500390565b60005b83811015611ffa578181015183820152602001611fe2565b8381111561191d5750506000910152565b600181811c9082168061201f57607f821691505b6020821081141561204057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146115dd57600080fdfea264697066735822122009919d1381747b772011814ff0d78c96037e5f0155ee8c43b76eda2a7fadae0164736f6c63430008040033";
