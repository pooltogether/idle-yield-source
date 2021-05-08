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
  "0x608060405234801561001057600080fd5b506040516137fe3803806137fe8339818101604052810190610032919061010f565b8160405161003f906100ed565b610049919061015a565b604051809103906000f080158015610065573d6000803e3d6000fd5b506000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506101be565b6130968061076883390190565b600081519050610109816101a7565b92915050565b6000806040838503121561012257600080fd5b6000610130858286016100fa565b9250506020610141858286016100fa565b9150509250929050565b61015481610175565b82525050565b600060208201905061016f600083018461014b565b92915050565b600061018082610187565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6101b081610175565b81146101bb57600080fd5b50565b61059b806101cd6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063022ec0951461004657806364a93264146100645780639163912114610082575b600080fd5b61004e6100a1565b60405161005b91906103a0565b60405180910390f35b61006c6100c5565b6040516100799190610385565b60405180910390f35b61008a6100eb565b604051610098929190610327565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006060600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a3f697ba60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b815260040161016a9190610357565b600060405180830381600087803b15801561018457600080fd5b505af1158015610198573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906101c1919061024a565b80925081935050509091565b60006101e06101db846103e0565b6103bb565b9050828152602081018484840111156101f857600080fd5b6102038482856104a7565b509392505050565b60008151905061021a8161054e565b92915050565b600082601f83011261023157600080fd5b81516102418482602086016101cd565b91505092915050565b6000806040838503121561025d57600080fd5b600061026b8582860161020b565b925050602083015167ffffffffffffffff81111561028857600080fd5b61029485828601610220565b9150509250929050565b6102a78161042d565b82525050565b60006102b882610411565b6102c2818561041c565b93506102d28185602086016104a7565b6102db8161053a565b840191505092915050565b6102ef8161045f565b82525050565b6102fe81610483565b82525050565b600061031160008361041c565b915061031c8261054b565b600082019050919050565b600060408201905061033c600083018561029e565b818103602083015261034e81846102ad565b90509392505050565b600060408201905061036c600083018461029e565b818103602083015261037d81610304565b905092915050565b600060208201905061039a60008301846102e6565b92915050565b60006020820190506103b560008301846102f5565b92915050565b60006103c56103d6565b90506103d182826104da565b919050565b6000604051905090565b600067ffffffffffffffff8211156103fb576103fa61050b565b5b6104048261053a565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006104388261043f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061046a82610471565b9050919050565b600061047c8261043f565b9050919050565b600061048e82610495565b9050919050565b60006104a08261043f565b9050919050565b60005b838110156104c55780820151818401526020810190506104aa565b838111156104d4576000848401525b50505050565b6104e38261053a565b810181811067ffffffffffffffff821117156105025761050161050b565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b50565b6105578161042d565b811461056257600080fd5b5056fea2646970667358221220e867409b3426eb2dd816f9c6a3d8f0739e86073ef353151b50b564a78969b07164736f6c6343000804003360806040527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6037553480156200003557600080fd5b50604051620030963803806200309683398181016040528101906200005b9190620001a0565b80603460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156200010757600080fd5b505af11580156200011c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001429190620001a0565b603560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200021a565b6000815190506200019a8162000200565b92915050565b600060208284031215620001b357600080fd5b6000620001c38482850162000189565b91505092915050565b6000620001d982620001e0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200020b81620001cc565b81146200021757600080fd5b50565b612e6c806200022a6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80637158da7c116100a2578063b99152d011610071578063b99152d014610309578063c4d66de814610339578063c811078e14610355578063c89039c514610371578063ddfa63ae1461038f57610116565b80637158da7c1461029557806387a6eeef146102b357806394a5c2e4146102cf578063b6cce5e2146102ed57610116565b80633576cd6b116100e95780633576cd6b146101b7578063361bb0c1146101e757806340c10f19146102175780634fb9bbba146102475780636cf81ec61461026557610116565b8063013054c21461011b578063026c42071461014b57806327e235e3146101695780632dd60c5e14610199575b600080fd5b61013560048036038101906101309190612555565b6103ad565b6040516101429190612947565b60405180910390f35b6101536109d1565b6040516101609190612947565b60405180910390f35b610183600480360381019061017e9190612475565b6109e0565b6040516101909190612947565b60405180910390f35b6101a16109f8565b6040516101ae9190612786565b60405180910390f35b6101d160048036038101906101cc9190612555565b610a1e565b6040516101de919061282a565b60405180910390f35b61020160048036038101906101fc9190612555565b610a3d565b60405161020e9190612947565b60405180910390f35b610231600480360381019061022c91906124c7565b610a4f565b60405161023e919061282a565b60405180910390f35b61024f610ae9565b60405161025c9190612947565b60405180910390f35b61027f600480360381019061027a9190612555565b610aef565b60405161028c9190612947565b60405180910390f35b61029d610b01565b6040516102aa9190612786565b60405180910390f35b6102cd60048036038101906102c891906125a7565b610b27565b005b6102d7610e23565b6040516102e49190612947565b60405180910390f35b61030760048036038101906103029190612555565b610e29565b005b610323600480360381019061031e9190612475565b610f60565b6040516103309190612947565b60405180910390f35b610353600480360381019061034e9190612475565b611163565b005b61036f600480360381019061036a919061252c565b6115e0565b005b6103796115e3565b6040516103869190612786565b60405180910390f35b610397611691565b6040516103a49190612947565b60405180910390f35b6000600260015414156103f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ec90612907565b60405180910390fd5b60026001819055506104297f5249c057c70f513d82c9cf520f32d20877733546bac20fb7de95595f8a19ff8960001b6115e0565b6104557f1e04357b3db622bdcce58148a96e9d0ca4f28dd55ff580649f62b2c75c120f4160001b6115e0565b6104817f5c6ede55b9908a79d685d194275f94ffa969d702e7fcc3327e52f463788c910c60001b6115e0565b600061048c8361169b565b90506104ba7f32a1e2cbd9f894a63b5981559103199b70a461ddcab2524125b32088925960f660001b6115e0565b6104e67f4130c893d164765d5565215a878485a1f35f5220ea87469557d42869c785325260001b6115e0565b6105127f556ae6dcc5d7d444e924971e96718ce6c189905c7bd4fd537999d70e94c1443960001b6115e0565b80603360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610594576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058b90612887565b60405180910390fd5b6105c07fcbee0e8de794a6fea40a973f65d74b6781021ed1a5ab16e4e4716dd5aa15db4a60001b6115e0565b6105ec7fb6f04a3521aed208094451b2ddbbf646d962971fc8bc0f740b873956398ef00560001b6115e0565b6106187f64e219e15095b4ea2d31ee20dbe322c2cf5893cab2b4a7f353baa9524dae755460001b6115e0565b6000603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638b30b516836040518263ffffffff1660e01b81526004016106759190612947565b602060405180830381600087803b15801561068f57600080fd5b505af11580156106a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c7919061257e565b90506106f57f8bf5afc4e6a297e001f41811f882e5cb0fa4f794c5bf848af02f3d65744315e560001b6115e0565b6107217f29873f430bee410d6b5956951d6bf5cfc79478330fc86b4f2134f58a7736a0b260001b6115e0565b81603360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461076c9190612ad5565b603360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506107db7f76d0d774001e09c96e3ddb9d036227e0208d35993a7636e3c687122e1365597160001b6115e0565b6108077fd7418f81909def6ca145e7cbe09293b2e86dfc0994c360628f4663b04cdf708d60001b6115e0565b836036546108159190612ad5565b6036819055506108477f8e94e0a97ebc3e866693e3bf09a664a9e8d2b9631e5aa9c9be5d0c18d984e22660001b6115e0565b6108737fa4945dac5e25ff5c94a83bc0b725594671f5c9de0e37577faa0e25b28ead954d60001b6115e0565b6108c03382603560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661191f9092919063ffffffff16565b6108ec7ffd88d3e9374a040e4ca8542a224ce3632a83970e926e3bc02f9897a50f16f40a60001b6115e0565b6109187fe079d1247cc0e04fc73582367d428ec73e153bd143079970ae719c499549047d60001b6115e0565b3373ffffffffffffffffffffffffffffffffffffffff167f5c9b0a8fe13a826ca676f5ad4f98c747b5086beb79ab58589b8211b62fa32fb98386604051610960929190612999565b60405180910390a26109947fae84b5a4857f28d8d2f1a09dafe340a220fb7642bd407c0241c74ac4d9e2f79860001b6115e0565b6109c07fd66ddc41d8b91f1fcc089c06820570cf51c814e03dc84a4681593f94df0a170260001b6115e0565b809250505060018081905550919050565b60006109db6119a5565b905090565b60336020528060005260406000206000915090505481565b603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081603654610a2e91906129f4565b60368190555060019050919050565b6000610a488261169b565b9050919050565b600081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610a9c91906129f4565b603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001905092915050565b60365481565b6000610afa82611adb565b9050919050565b603560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026001541415610b6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6490612907565b60405180910390fd5b6002600181905550610ba17f7ade7899277b6466704be274a93016a8054a350dc76eb89660e192ff1c94417560001b6115e0565b610bcd7f45708ef2bf3524c3b27b914ce4dc5beb97a7a2e305e5d32874920025a4d355b360001b6115e0565b610bf97f5bd81131eaac6cccc72c32f3a8efe024433a26bd2e3649c328de78cc08bdfd1060001b6115e0565b6000610c0483611d5f565b9050610c327ffd9bca490a19313a3cc2e8a485bc45b464fd31f5129bc46bf2969b635fe3c60b60001b6115e0565b610c5e7fb2df130c9bca16d57cd005bbfbd0ff666855481499ba4a3c0c8c50b159822b9e60001b6115e0565b80603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610ca991906129f4565b603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610d187fa667eab00b904514c2b77daa7b3055d3b9998b7130b5dc7c911beb145095fb6b60001b6115e0565b610d447fc318b7f26eef8c3ca7ab611485f69156ae3cf2d99dc9403b8d53969e6e48871260001b6115e0565b82603654610d5291906129f4565b603681905550610d847faf583314f8e62658a83364a0cc9b13a65b7262a973fc9aae57eb81ceb6681c8b60001b6115e0565b610db07f09c406c616a206a896d27389693dd3326ff7121aecac5469a00202a9a24259e860001b6115e0565b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fdef5cc95ad9b1c65c586d0fce815ec764b575719636edf58ff2553ae6f1104528386604051610e0f929190612999565b60405180910390a350600180819055505050565b60375481565b610e557fa9984c703447018653ab77abea075397962ca152966d0bf6d5dbf8dffe8063d860001b6115e0565b610e817fbc2fb440516d7263bf3fa9b9159929f6ce41d9a76c51347d9b0e8caf68bbe25860001b6115e0565b610ead7f7ebe44e1fb166f1be8534d58fc14818ffd2a3368f4beb352b8e68b30046b2b8260001b6115e0565b610eb681611d5f565b50610ee37f0dede14f517d6b0ba46187b60653b6ebb4e52fa22e68a754f6e284f1e326dc1e60001b6115e0565b610f0f7f63c76b7f3b3cdafa207e0969706e648594b4667abda623f17241241ce97ab11660001b6115e0565b3373ffffffffffffffffffffffffffffffffffffffff167fbb2c10eb8b0d65523a501a1c079906e38af3c4231e31b799d408daacd7ce722682604051610f559190612947565b60405180910390a250565b6000610f8e7f7acb7ddc9dc465e271cc00f10b17c5043a42aa5b8f4264736eb926ac2935a27a60001b6115e0565b610fba7f043018a973738de74e17ce3962fd7a2bb92332b7341c3c011b9c9c976df1f90260001b6115e0565b610fe67fdb35ebc959839277a2852ca66aa97af2c3f61ed4088d26faffba0b1a3e7ff85760001b6115e0565b6000603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054141561108f5761105a7f622d2928385f6c146b20014f9c05af033cfac2c17a79cf0a58360ecc49d67fc860001b6115e0565b6110867f9cc47d69f7fc2916e432b196767f75fb8b4b3e7e4450b0037eb486df15dc702660001b6115e0565b6000905061115e565b6110bb7f7006532a454c0df603cce88b76f92e3c2fac5c3ec6d19cb515ff6beda3f43f3f60001b6115e0565b6110e77f2f9c4d8549a0ef7899bda6151d33a1a149483057e3959e7a12650a7ca3245a5260001b6115e0565b6111137fc30d099a163598c1b1c15719e14ba589b1435c0964fa05ca8143f89c141ca52360001b6115e0565b61115b603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611adb565b90505b919050565b600060019054906101000a900460ff1680611189575060008054906101000a900460ff16155b6111c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111bf906128a7565b60405180910390fd5b60008060019054906101000a900460ff161590508015611218576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6112447f8d058088cc5cb838f7d4352e02a82ad27a4da23170d3363c724eb75971d49be860001b6115e0565b6112707f16b9f130192b3b6a0b0093435b90b5359f7b8b3d41a4d44d2c50b0a64c0a2e3f60001b6115e0565b61129c7fafda6926f81fb1968b6ebda77e752bb1ebe94c7a712c656c0d092cb302988e0560001b6115e0565b81603460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506113097fa330d5f4e24a134ac905f32d4cc366a1092263aa2bb20e8508cb8c37f4e654eb60001b6115e0565b6113357f087a465e56e25bcfbc1f557ff0f143ce832a0382a0fe72e337d0cadbdeaa88f060001b6115e0565b603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561139f57600080fd5b505af11580156113b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d7919061249e565b603560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506114437fcaa6196610355b5026af77e2a5e40927ce76fd00667b050103b06b0b510cc7e360001b6115e0565b61146f7fa0739502d1bf0d11a5cba30f8c4138bb567ffbe3f2ea1d70b807d216305deeb260001b6115e0565b6114fe603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff603560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611fa39092919063ffffffff16565b61152a7f7a5fb533e2380cc0a61f5c8096ae249f492dfd418a473cbfae31fe79a346a32c60001b6115e0565b6115567ffe811d06d4519af3bac6ce6c12001452ab9a6ed7c0a6eadba14e110ad06f45e060001b6115e0565b603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f795e3042efad8c5d441d3c1a8cb34f31d2c27dba7a6d188d0242de49b828dcd760405160405180910390a280156115dc5760008060016101000a81548160ff0219169083151502179055505b5050565b50565b60006116117fdb7830beb59ab3387043ae24452cc1f739f1d584d2e79180f767f1696235e2e960001b6115e0565b61163d7f0d4357eddfb99d465b36f7a15ec1b53cc97d98a2fd072c84fe05e27a1955ae5f60001b6115e0565b6116697f388cf2fb6a6c61ff290a87cab502a1b9b7a6150b77f52a3f9ad50ad6439e281360001b6115e0565b603560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000603654905090565b60006116c97fc1d0e6603f91e4102bf1d5805ed3649feaaaa75075a935dbee8d706519f8d22e60001b6115e0565b6116f57fa48393a60fa052e4c71beed51cd12792f84b259312a8987c32644f018cd7f94460001b6115e0565b6117217fb236a86c4470b15a847913f8446d8b4c6ee0f85169c2f6985f6b43876083a04d60001b6115e0565b600061174f7f09defbd6f2448f9b017b1575c9060cd032c196e6aff51adc33232d402181bfb360001b6115e0565b61177b7f333f3a6cc4e7402ff33cdd5f80e160659ac484c87c1f7bf20d34449bc511a7e360001b6115e0565b60006117856119a5565b1415611817576117b77f6c65a92710bccc428b082d5cacc9ca7090477f258dca4fb510b3800de0a525d360001b6115e0565b6117e37f2f8068ce2e3919b03a01f19a9e95f27923fc10bf78006ebf5ca70d020415a2f160001b6115e0565b61180f7f96411d45c216a67e7710df777da447e62547ac995193ee74c909b3f6d775d6c560001b6115e0565b8290506118be565b6118437f3b3fba687fcd50bb14515db0a65922adb448b0382898f1ba9ee68afd8b41fbb860001b6115e0565b61186f7f42e3c2e36cddbe85007bd6a9e8c214fc64c45828ca49b668f6b86b0abc0623cf60001b6115e0565b61189b7f14f8b9693e41ad37d8af2fed34d3e6477352d02d49c0f1be880b0c0f0e25bb0860001b6115e0565b6036546118a66119a5565b846118b19190612a7b565b6118bb9190612a4a565b90505b6118ea7fef79d8bf7b3ff2aef765f5e2e8c9b349bd65f25d51fc59c7f71d556e16618b5860001b6115e0565b6119167f1689a85b3f3a248c854efbe8d7269e207d6142e482bce5784604dbf729f0b62260001b6115e0565b80915050919050565b6119a08363a9059cbb60e01b848460405160240161193e929190612801565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612101565b505050565b60006119d37f6dc2312ddc4337854fb91ddc5c184166bbc4ad27847a3668634c5ef94f65e91a60001b6115e0565b6119ff7f5db0ea99e9f4a0d563871b6bf131d079295a2e2b916b55887327ea4524ff7e9360001b6115e0565b611a2b7f4154fe1d1008568234789ab4103ef8af04d42a35f6c8e4878ec1805aba525ad760001b6115e0565b603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401611a869190612786565b60206040518083038186803b158015611a9e57600080fd5b505afa158015611ab2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ad6919061257e565b905090565b6000611b097fb97c26d029ec2f6da119dc3700f21ed4ba92015f04e091155f8979e85ec7aee060001b6115e0565b611b357f472c71ab3f7706f491f84d5233afb7804e6372fad9d753e371d98ab9f653a23d60001b6115e0565b611b617f84a454fc0c52a8b3a315762ec3fea1055636be4f3fc7cab31546469a814ec18c60001b6115e0565b6000611b8f7f50af4bc9b4ea7af753627142a2adad58cf31de23e557e9d7a23d9eb24e00338a60001b6115e0565b611bbb7f8496c022cf57fa9c02d5bf4cc32b0e19924a5959e9932c13493af4f894c05c0a60001b6115e0565b6000611bc56119a5565b1415611c5757611bf77fb88ec9576fd248a360a6abf59be2dc89f630da2f422cf785d4baa46f7766a42760001b6115e0565b611c237f02cb602301a46d14fd446aeb04ff955eeff98b82010bed3b88b3553ae50ed51f60001b6115e0565b611c4f7f22e394d571c648f39c44c45f3725172966aad9cdb1b6750a570df3146448a65d60001b6115e0565b829050611cfe565b611c837fdac6180905d7eac809878980e5cf2a0f39fc63842f309ce9ebfc780193d7437160001b6115e0565b611caf7f96ca47c4529a0fc152ca5f7a08c8e0f3a04b4b37cb0832ee456accf00662cf1960001b6115e0565b611cdb7fb3f9438e7ef39a78bd61e9906a9ab68cbe757600e9a7e4baf5d542223f9615fe60001b6115e0565b611ce36119a5565b60365484611cf19190612a7b565b611cfb9190612a4a565b90505b611d2a7ff792cc4911a07247996139229e3fddb40c3513242b25ae63005882e1a67f6d9660001b6115e0565b611d567f92f56efc0faff765e26cc4d00ad126b07e9881323cf8f4073396a0b6e9471e2260001b6115e0565b80915050919050565b6000611d8d7fa1aaba97004b8028afbd5970f1b3f46d5f9412f39d8b03fc0c914308d5e8bac160001b6115e0565b611db97f6af0c3d1d90de258df5dc740a8aeaf7044674036253f784af9a8d21cc1ed8f7360001b6115e0565b611de57f1ca2f816b19e395b0f1e6d9c0482cfb2617df6875747f6c23769f9bc98cc2f3a60001b6115e0565b611e34333084603560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166121c8909392919063ffffffff16565b611e607f84043d4fd5a7f3bad54e2e681f246a9df07be1cbe118598d352ded89cc39da1760001b6115e0565b611e8c7f855cfc06db420917a5524be6ecf4ff87bae27949a57cca1845a5a8bcd0b73bcb60001b6115e0565b6000603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632befabbf846000806040518463ffffffff1660e01b8152600401611eee93929190612962565b602060405180830381600087803b158015611f0857600080fd5b505af1158015611f1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f40919061257e565b9050611f6e7f603b9173b707498273750e6491e1bec6fced0ceceb97b46a22ea3dd46cd1779f60001b6115e0565b611f9a7f5c384dd22bd64d34cb392a246b1e147d929e1af7fc204cde5f5c8b15935c02bb60001b6115e0565b80915050919050565b600081148061203c575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401611fea9291906127a1565b60206040518083038186803b15801561200257600080fd5b505afa158015612016573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061203a919061257e565b145b61207b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161207290612927565b60405180910390fd5b6120fc8363095ea7b360e01b848460405160240161209a929190612801565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612101565b505050565b6000612163826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166122519092919063ffffffff16565b90506000815111156121c357808060200190518101906121839190612503565b6121c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121b9906128e7565b60405180910390fd5b5b505050565b61224b846323b872dd60e01b8585856040516024016121e9939291906127ca565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612101565b50505050565b60606122608484600085612269565b90509392505050565b6060824710156122ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122a590612867565b60405180910390fd5b6122b78561237d565b6122f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122ed906128c7565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161231f919061276f565b60006040518083038185875af1925050503d806000811461235c576040519150601f19603f3d011682016040523d82523d6000602084013e612361565b606091505b5091509150612371828286612390565b92505050949350505050565b600080823b905060008111915050919050565b606083156123a0578290506123f0565b6000835111156123b35782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123e79190612845565b60405180910390fd5b9392505050565b60008135905061240681612dda565b92915050565b60008151905061241b81612dda565b92915050565b60008151905061243081612df1565b92915050565b60008135905061244581612e08565b92915050565b60008135905061245a81612e1f565b92915050565b60008151905061246f81612e1f565b92915050565b60006020828403121561248757600080fd5b6000612495848285016123f7565b91505092915050565b6000602082840312156124b057600080fd5b60006124be8482850161240c565b91505092915050565b600080604083850312156124da57600080fd5b60006124e8858286016123f7565b92505060206124f98582860161244b565b9150509250929050565b60006020828403121561251557600080fd5b600061252384828501612421565b91505092915050565b60006020828403121561253e57600080fd5b600061254c84828501612436565b91505092915050565b60006020828403121561256757600080fd5b60006125758482850161244b565b91505092915050565b60006020828403121561259057600080fd5b600061259e84828501612460565b91505092915050565b600080604083850312156125ba57600080fd5b60006125c88582860161244b565b92505060206125d9858286016123f7565b9150509250929050565b6125ec81612b09565b82525050565b6125fb81612b1b565b82525050565b600061260c826129c2565b61261681856129d8565b9350612626818560208601612b5b565b80840191505092915050565b600061263d826129cd565b61264781856129e3565b9350612657818560208601612b5b565b61266081612bec565b840191505092915050565b60006126786026836129e3565b915061268382612bfd565b604082019050919050565b600061269b6021836129e3565b91506126a682612c4c565b604082019050919050565b60006126be602e836129e3565b91506126c982612c9b565b604082019050919050565b60006126e1601d836129e3565b91506126ec82612cea565b602082019050919050565b6000612704602a836129e3565b915061270f82612d13565b604082019050919050565b6000612727601f836129e3565b915061273282612d62565b602082019050919050565b600061274a6036836129e3565b915061275582612d8b565b604082019050919050565b61276981612b51565b82525050565b600061277b8284612601565b915081905092915050565b600060208201905061279b60008301846125e3565b92915050565b60006040820190506127b660008301856125e3565b6127c360208301846125e3565b9392505050565b60006060820190506127df60008301866125e3565b6127ec60208301856125e3565b6127f96040830184612760565b949350505050565b600060408201905061281660008301856125e3565b6128236020830184612760565b9392505050565b600060208201905061283f60008301846125f2565b92915050565b6000602082019050818103600083015261285f8184612632565b905092915050565b600060208201905081810360008301526128808161266b565b9050919050565b600060208201905081810360008301526128a08161268e565b9050919050565b600060208201905081810360008301526128c0816126b1565b9050919050565b600060208201905081810360008301526128e0816126d4565b9050919050565b60006020820190508181036000830152612900816126f7565b9050919050565b600060208201905081810360008301526129208161271a565b9050919050565b600060208201905081810360008301526129408161273d565b9050919050565b600060208201905061295c6000830184612760565b92915050565b60006060820190506129776000830186612760565b61298460208301856125f2565b61299160408301846125e3565b949350505050565b60006040820190506129ae6000830185612760565b6129bb6020830184612760565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006129ff82612b51565b9150612a0a83612b51565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612a3f57612a3e612b8e565b5b828201905092915050565b6000612a5582612b51565b9150612a6083612b51565b925082612a7057612a6f612bbd565b5b828204905092915050565b6000612a8682612b51565b9150612a9183612b51565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612aca57612ac9612b8e565b5b828202905092915050565b6000612ae082612b51565b9150612aeb83612b51565b925082821015612afe57612afd612b8e565b5b828203905092915050565b6000612b1482612b31565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015612b79578082015181840152602081019050612b5e565b83811115612b88576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f52656465656d546f6b656e3a204e6f7420456e6f756768204465706f7369746560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b612de381612b09565b8114612dee57600080fd5b50565b612dfa81612b1b565b8114612e0557600080fd5b50565b612e1181612b27565b8114612e1c57600080fd5b50565b612e2881612b51565b8114612e3357600080fd5b5056fea2646970667358221220f418a7bc1a6793888dc92fae2417cf45cec628663d05ed88568c9a0ec9f3d34464736f6c63430008040033";
