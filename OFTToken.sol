// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/OFT.sol";

contract MyOFTToken is OFT {
    /**
     * @dev Constructor for the Omnichain Fungible Token
     * @param _name Token Name
     * @param _symbol Token Symbol
     * @param _lzEndpoint LayerZero Endpoint address for the specific chain
     * @param _delegate The address that can manage configurations
     */
    constructor(
        string memory _name,
        string memory _symbol,
        address _lzEndpoint,
        address _delegate
    ) OFT(_name, _symbol, _lzEndpoint, _delegate) {
        // Mint initial supply on the "home" chain
        if (block.chainid == 1) { // Example: Ethereum Mainnet
            _mint(_delegate, 1000000 * 10**decimals());
        }
    }
}
