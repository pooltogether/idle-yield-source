/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { IdleYieldSource } from "../IdleYieldSource";

export class IdleYieldSource__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IdleYieldSource> {
    return super.deploy(overrides || {}) as Promise<IdleYieldSource>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IdleYieldSource {
    return super.attach(address) as IdleYieldSource;
  }
  connect(signer: Signer): IdleYieldSource__factory {
    return super.connect(signer) as IdleYieldSource__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IdleYieldSource {
    return new Contract(address, _abi, signerOrProvider) as IdleYieldSource;
  }
}

const _abi = [
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
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
    ],
    name: "TransferredERC20",
    type: "event",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
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
    inputs: [],
    name: "maxValue",
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
        name: "redeemAmount",
        type: "uint256",
      },
    ],
    name: "redeemToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "totalUnderlyingAssets",
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
  "0x608060405260001960375534801561001657600080fd5b50610e77806100266000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806387a6eeef1161007157806387a6eeef1461013b57806394a5c2e414610150578063b6cce5e214610159578063b99152d01461016c578063c4d66de81461017f578063c89039c51461019257600080fd5b8063013054c2146100ae57806327e235e3146100d45780632dd60c5e146100f45780634fb9bbba1461011f5780637158da7c14610128575b600080fd5b6100c16100bc366004610ccb565b6101a3565b6040519081526020015b60405180910390f35b6100c16100e2366004610c73565b60336020526000908152604090205481565b603454610107906001600160a01b031681565b6040516001600160a01b0390911681526020016100cb565b6100c160365481565b603554610107906001600160a01b031681565b61014e610149366004610cfb565b610394565b005b6100c160375481565b61014e610167366004610ccb565b610497565b6100c161017a366004610c73565b6104d9565b61014e61018d366004610c73565b610526565b6035546001600160a01b0316610107565b6000600260015414156101fd5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600155600061020d836106cf565b336000908152603360205260409020549091508111156102795760405162461bcd60e51b815260206004820152602160248201527f52656465656d546f6b656e3a204e6f7420456e6f756768204465706f736974656044820152601960fa1b60648201526084016101f4565b6034546040516345985a8b60e11b8152600481018390526000916001600160a01b031690638b30b51690602401602060405180830381600087803b1580156102c057600080fd5b505af11580156102d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f89190610ce3565b33600090815260336020526040902054909150610316908390610dd0565b33600090815260336020526040902055603654610334908590610dd0565b60365560355461034e906001600160a01b0316338361070b565b604080518381526020810186905233917f5c9b0a8fe13a826ca676f5ad4f98c747b5086beb79ab58589b8211b62fa32fb9910160405180910390a2600180559392505050565b600260015414156103e75760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016101f4565b600260015560006103f783610773565b6001600160a01b03831660009081526033602052604090205490915061041e908290610d79565b6001600160a01b038316600090815260336020526040902055603654610445908490610d79565b60365560408051828152602081018590526001600160a01b0384169133917fdef5cc95ad9b1c65c586d0fce815ec764b575719636edf58ff2553ae6f110452910160405180910390a350506001805550565b6104a081610773565b5060405181815233907fbb2c10eb8b0d65523a501a1c079906e38af3c4231e31b799d408daacd7ce72269060200160405180910390a250565b6001600160a01b0381166000908152603360205260408120546104fe57506000919050565b6001600160a01b0382166000908152603360205260409020546105209061081b565b92915050565b600054610100900460ff168061053f575060005460ff16155b6105a25760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016101f4565b600054610100900460ff161580156105c4576000805461ffff19166101011790555b603480546001600160a01b0319166001600160a01b03841690811790915560408051637e062a3560e11b8152905163fc0c546a916004808201926020929091908290030181600087803b15801561061a57600080fd5b505af115801561062e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106529190610c8f565b603580546001600160a01b0319166001600160a01b039283169081179091556034546106819216600019610846565b6034546040516001600160a01b03909116907f795e3042efad8c5d441d3c1a8cb34f31d2c27dba7a6d188d0242de49b828dcd790600090a280156106cb576000805461ff00191690555b5050565b6000806106da61096a565b6106e5575081610520565b6036546106f061096a565b6106fa9085610db1565b6107049190610d91565b9392505050565b6040516001600160a01b03831660248201526044810182905261076e90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526109eb565b505050565b60355460009061078e906001600160a01b0316333085610abd565b603454604051632befabbf60e01b81526004810184905260006024820181905260448201819052916001600160a01b031690632befabbf90606401602060405180830381600087803b1580156107e357600080fd5b505af11580156107f7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107049190610ce3565b60008061082661096a565b610831575081610520565b61083961096a565b6036546106fa9085610db1565b8015806108cf5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561089557600080fd5b505afa1580156108a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cd9190610ce3565b155b61093a5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084016101f4565b6040516001600160a01b03831660248201526044810182905261076e90849063095ea7b360e01b90606401610737565b6034546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b1580156109ae57600080fd5b505afa1580156109c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e69190610ce3565b905090565b6000610a40826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610afb9092919063ffffffff16565b80519091501561076e5780806020019051810190610a5e9190610cab565b61076e5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016101f4565b6040516001600160a01b0380851660248301528316604482015260648101829052610af59085906323b872dd60e01b90608401610737565b50505050565b6060610b0a8484600085610b12565b949350505050565b606082471015610b735760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016101f4565b843b610bc15760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101f4565b600080866001600160a01b03168587604051610bdd9190610d2a565b60006040518083038185875af1925050503d8060008114610c1a576040519150601f19603f3d011682016040523d82523d6000602084013e610c1f565b606091505b5091509150610c2f828286610c3a565b979650505050505050565b60608315610c49575081610704565b825115610c595782518084602001fd5b8160405162461bcd60e51b81526004016101f49190610d46565b600060208284031215610c84578081fd5b813561070481610e29565b600060208284031215610ca0578081fd5b815161070481610e29565b600060208284031215610cbc578081fd5b81518015158114610704578182fd5b600060208284031215610cdc578081fd5b5035919050565b600060208284031215610cf4578081fd5b5051919050565b60008060408385031215610d0d578081fd5b823591506020830135610d1f81610e29565b809150509250929050565b60008251610d3c818460208701610de7565b9190910192915050565b6020815260008251806020840152610d65816040850160208701610de7565b601f01601f19169190910160400192915050565b60008219821115610d8c57610d8c610e13565b500190565b600082610dac57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610dcb57610dcb610e13565b500290565b600082821015610de257610de2610e13565b500390565b60005b83811015610e02578181015183820152602001610dea565b83811115610af55750506000910152565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610e3e57600080fd5b5056fea264697066735822122016467edcfae59fd90905134c94a074350416f19fa73431511effebc6c727bfa664736f6c63430008040033";
