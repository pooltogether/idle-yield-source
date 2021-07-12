<p align="center">
  <a href="https://github.com/pooltogether/pooltogether--brand-assets">
    <img src="https://github.com/pooltogether/pooltogether--brand-assets/blob/977e03604c49c63314450b5d432fe57d34747c66/logo/pooltogether-logo--purple-gradient.png?raw=true" alt="PoolTogether Brand" style="max-width:100%;" width="200">
  </a>
</p>
<br />

# IdleYieldSource for PoolTogether Prize Pool

![Tests](https://github.com/pooltogether/idle-yield-source/actions/workflows/main.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/pooltogether/idle-yield-source/badge.svg?branch=master)](https://coveralls.io/github/pooltogether/idle-yield-source?branch=master)
[![built-with openzeppelin](https://img.shields.io/badge/built%20with-OpenZeppelin-3677FF)](https://docs.openzeppelin.com/)

PoolTogether Yield Source that uses [Idle](https://idle.finance/) to generate yield by lending ERC20 token supported by Idle and deposited into the Idle Yield Source.

## Setup

1). We use [direnv](https://direnv.net) to manage environment variables. You'll likely need to install it.

Copy `.envrc.example` and write down the env variables needed to run this project.
```
cp .envrc.example .envrc
```

Once your env variables are setup, load them with:
```
direnv allow
```

2). Install Dependency by running:

    yarn

3). To compile Smart contract code:

    yarn compile

3). To run unit tests:

    yarn test

4). Check test coverage

    yarn coverage

5). Test script for prizepool For Mainnet fork

    yarn fork

6). Deploy New Idle Yield Source through Pooltogether-proxy-contract on kovan or mainnet

    yarn deploy-kovan
    or
    yarn deploy-mainnet

    Output For Kovan:-

    PoolTogether Idle Yield Source - Deploy Script
    network: Kovan (remote)
    deployer: 0x2031d045f56e679925bFdCDa3416448Cc9B1b688
    Deploying IdleYieldSourceProxyFactory...
    Deploying Proxy Yield Source...
    Deployed Yield Source...
    Initializing Yield Source
    Initialized!!
    Deployed New IdleYieldSource Address 0xecD4b75E7ccf571CF99B0F51955866657469bB49
