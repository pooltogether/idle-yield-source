/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { IdleYieldSourceProxyFactoryHarness } from "../IdleYieldSourceProxyFactoryHarness";

export class IdleYieldSourceProxyFactoryHarness__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _idleToken: string,
    _iGenericProxyFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IdleYieldSourceProxyFactoryHarness> {
    return super.deploy(
      _idleToken,
      _iGenericProxyFactory,
      overrides || {}
    ) as Promise<IdleYieldSourceProxyFactoryHarness>;
  }
  getDeployTransaction(
    _idleToken: string,
    _iGenericProxyFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _idleToken,
      _iGenericProxyFactory,
      overrides || {}
    );
  }
  attach(address: string): IdleYieldSourceProxyFactoryHarness {
    return super.attach(address) as IdleYieldSourceProxyFactoryHarness;
  }
  connect(signer: Signer): IdleYieldSourceProxyFactoryHarness__factory {
    return super.connect(signer) as IdleYieldSourceProxyFactoryHarness__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IdleYieldSourceProxyFactoryHarness {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IdleYieldSourceProxyFactoryHarness;
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
      {
        internalType: "address",
        name: "_iGenericProxyFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "createNewProxy",
    outputs: [
      {
        internalType: "address",
        name: "instanceCreated",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "iGenericProxyFactory",
    outputs: [
      {
        internalType: "contract IGenericProxyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "instance",
    outputs: [
      {
        internalType: "contract IdleYieldSourceHarness",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516114ea3803806114ea83398101604081905261002f916100c7565b8160405161003c9061009e565b6001600160a01b039091168152602001604051809103906000f080158015610068573d6000803e3d6000fd5b50600080546001600160a01b039283166001600160a01b03199182161790915560018054939092169216919091179055506100f9565b611117806103d383390190565b80516001600160a01b03811681146100c257600080fd5b919050565b600080604083850312156100d9578182fd5b6100e2836100ab565b91506100f0602084016100ab565b90509250929050565b6102cb806101086000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063022ec0951461004657806364a93264146100765780639163912114610089575b600080fd5b600054610059906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b600154610059906001600160a01b031681565b61009161009f565b60405161006d92919061020d565b60015460008054604080516351fb4bdd60e11b81526001600160a01b039283166004820152602481019190915260448101839052919260609291169063a3f697ba90606401600060405180830381600087803b1580156100fe57600080fd5b505af1158015610112573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261013a9190810190610143565b90939092509050565b60008060408385031215610155578182fd5b82516001600160a01b038116811461016b578283fd5b602084015190925067ffffffffffffffff80821115610188578283fd5b818501915085601f83011261019b578283fd5b8151818111156101ad576101ad61027f565b604051601f8201601f19908116603f011681019083821181831017156101d5576101d561027f565b816040528281528860208487010111156101ed578586fd5b6101fe83602083016020880161024f565b80955050505050509250929050565b60018060a01b0383168152604060208201526000825180604084015261023a81606085016020870161024f565b601f01601f1916919091016060019392505050565b60005b8381101561026a578181015183820152602001610252565b83811115610279576000848401525b50505050565b634e487b7160e01b600052604160045260246000fdfea26469706673582212208b5d59bbb06c9cbfdbebb297286aa3403b081211c4d2a808eb4e468271732ad964736f6c63430008040033608060405260001960375534801561001657600080fd5b50604051611117380380611117833981016040819052610035916100e9565b603480546001600160a01b0319166001600160a01b03831690811790915560408051637e062a3560e11b8152905163fc0c546a916004808201926020929091908290030181600087803b15801561008b57600080fd5b505af115801561009f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100c391906100e9565b603580546001600160a01b0319166001600160a01b039290921691909117905550610117565b6000602082840312156100fa578081fd5b81516001600160a01b0381168114610110578182fd5b9392505050565b610ff1806101266000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80636cf81ec6116100a2578063b6cce5e211610071578063b6cce5e21461021f578063b99152d014610232578063c4d66de814610245578063c89039c514610258578063ddfa63ae1461026957600080fd5b80636cf81ec6146101db5780637158da7c146101ee57806387a6eeef1461020157806394a5c2e41461021657600080fd5b80633576cd6b116100de5780633576cd6b14610189578063361bb0c1146101ac57806340c10f19146101bf5780634fb9bbba146101d257600080fd5b8063013054c214610110578063026c42071461013657806327e235e31461013e5780632dd60c5e1461015e575b600080fd5b61012361011e366004610e45565b610271565b6040519081526020015b60405180910390f35b610123610462565b61012361014c366004610dc2565b60336020526000908152604090205481565b603454610171906001600160a01b031681565b6040516001600160a01b03909116815260200161012d565b61019c610197366004610e45565b610471565b604051901515815260200161012d565b6101236101ba366004610e45565b61048c565b61019c6101cd366004610dfa565b61049d565b61012360365481565b6101236101e9366004610e45565b6104e3565b603554610171906001600160a01b031681565b61021461020f366004610e75565b6104ee565b005b61012360375481565b61021461022d366004610e45565b6105f1565b610123610240366004610dc2565b610633565b610214610253366004610dc2565b61067a565b6035546001600160a01b0316610171565b603654610123565b6000600260015414156102cb5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260015560006102db83610823565b336000908152603360205260409020549091508111156103475760405162461bcd60e51b815260206004820152602160248201527f52656465656d546f6b656e3a204e6f7420456e6f756768204465706f736974656044820152601960fa1b60648201526084016102c2565b6034546040516345985a8b60e11b8152600481018390526000916001600160a01b031690638b30b51690602401602060405180830381600087803b15801561038e57600080fd5b505af11580156103a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c69190610e5d565b336000908152603360205260409020549091506103e4908390610f4a565b33600090815260336020526040902055603654610402908590610f4a565b60365560355461041c906001600160a01b0316338361085f565b604080518381526020810186905233917f5c9b0a8fe13a826ca676f5ad4f98c747b5086beb79ab58589b8211b62fa32fb9910160405180910390a2600180559392505050565b600061046c6108c7565b905090565b6000816036546104819190610ef3565b603655506001919050565b600061049782610823565b92915050565b6001600160a01b0382166000908152603360205260408120546104c1908390610ef3565b6001600160a01b03841660009081526033602052604090205550600192915050565b600061049782610943565b600260015414156105415760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102c2565b600260015560006105518361096e565b6001600160a01b038316600090815260336020526040902054909150610578908290610ef3565b6001600160a01b03831660009081526033602052604090205560365461059f908490610ef3565b60365560408051828152602081018590526001600160a01b0384169133917fdef5cc95ad9b1c65c586d0fce815ec764b575719636edf58ff2553ae6f110452910160405180910390a350506001805550565b6105fa8161096e565b5060405181815233907fbb2c10eb8b0d65523a501a1c079906e38af3c4231e31b799d408daacd7ce72269060200160405180910390a250565b6001600160a01b03811660009081526033602052604081205461065857506000919050565b6001600160a01b03821660009081526033602052604090205461049790610943565b600054610100900460ff1680610693575060005460ff16155b6106f65760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016102c2565b600054610100900460ff16158015610718576000805461ffff19166101011790555b603480546001600160a01b0319166001600160a01b03841690811790915560408051637e062a3560e11b8152905163fc0c546a916004808201926020929091908290030181600087803b15801561076e57600080fd5b505af1158015610782573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a69190610dde565b603580546001600160a01b0319166001600160a01b039283169081179091556034546107d59216600019610a16565b6034546040516001600160a01b03909116907f795e3042efad8c5d441d3c1a8cb34f31d2c27dba7a6d188d0242de49b828dcd790600090a2801561081f576000805461ff00191690555b5050565b60008061082e6108c7565b610839575081610497565b6036546108446108c7565b61084e9085610f2b565b6108589190610f0b565b9392505050565b6040516001600160a01b0383166024820152604481018290526108c290849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610b3a565b505050565b6034546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b15801561090b57600080fd5b505afa15801561091f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046c9190610e5d565b60008061094e6108c7565b610959575081610497565b6109616108c7565b60365461084e9085610f2b565b603554600090610989906001600160a01b0316333085610c0c565b603454604051632befabbf60e01b81526004810184905260006024820181905260448201819052916001600160a01b031690632befabbf90606401602060405180830381600087803b1580156109de57600080fd5b505af11580156109f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108589190610e5d565b801580610a9f5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b158015610a6557600080fd5b505afa158015610a79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9d9190610e5d565b155b610b0a5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084016102c2565b6040516001600160a01b0383166024820152604481018290526108c290849063095ea7b360e01b9060640161088b565b6000610b8f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610c4a9092919063ffffffff16565b8051909150156108c25780806020019051810190610bad9190610e25565b6108c25760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102c2565b6040516001600160a01b0380851660248301528316604482015260648101829052610c449085906323b872dd60e01b9060840161088b565b50505050565b6060610c598484600085610c61565b949350505050565b606082471015610cc25760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102c2565b843b610d105760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102c2565b600080866001600160a01b03168587604051610d2c9190610ea4565b60006040518083038185875af1925050503d8060008114610d69576040519150601f19603f3d011682016040523d82523d6000602084013e610d6e565b606091505b5091509150610d7e828286610d89565b979650505050505050565b60608315610d98575081610858565b825115610da85782518084602001fd5b8160405162461bcd60e51b81526004016102c29190610ec0565b600060208284031215610dd3578081fd5b813561085881610fa3565b600060208284031215610def578081fd5b815161085881610fa3565b60008060408385031215610e0c578081fd5b8235610e1781610fa3565b946020939093013593505050565b600060208284031215610e36578081fd5b81518015158114610858578182fd5b600060208284031215610e56578081fd5b5035919050565b600060208284031215610e6e578081fd5b5051919050565b60008060408385031215610e87578182fd5b823591506020830135610e9981610fa3565b809150509250929050565b60008251610eb6818460208701610f61565b9190910192915050565b6020815260008251806020840152610edf816040850160208701610f61565b601f01601f19169190910160400192915050565b60008219821115610f0657610f06610f8d565b500190565b600082610f2657634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610f4557610f45610f8d565b500290565b600082821015610f5c57610f5c610f8d565b500390565b60005b83811015610f7c578181015183820152602001610f64565b83811115610c445750506000910152565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610fb857600080fd5b5056fea2646970667358221220759a2860faa6cdbe47554629fc1a3c7b2f2ca34b308e92caf9217963eb11f0f764736f6c63430008040033";
