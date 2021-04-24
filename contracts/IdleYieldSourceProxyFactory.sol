// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IdleYieldSource.sol";
import "./interfaces/GenericProxyFactory/IGenericProxyFactory.sol";

contract IdleYieldSourceProxyFactory {
    
    IdleYieldSource public idleYieldSourceInstance;
    IGenericProxyFactory public iGenericProxyFactory;

    constructor(address _instance, address _iGenericProxyFactory) {
        idleYieldSourceInstance = IdleYieldSource(_instance);
        iGenericProxyFactory = IGenericProxyFactory(_iGenericProxyFactory);
    }
    
    function createNewProxy(address _idleToken, address _iIdleTokenHelper) 
        public returns (address instanceCreated, bytes memory result) {
            (instanceCreated, result)= iGenericProxyFactory.create(address(idleYieldSourceInstance), 
                abi.encodeWithSignature('initialize(address,address)',
                _idleToken, _iIdleTokenHelper
            ));
    }
}