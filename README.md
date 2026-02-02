# Cross-Chain Token Bridge (LayerZero V2)

This repository provides an expert foundation for building interoperable Web3 applications. It implements the LayerZero Omnichain Fungible Token (OFT) standard, allowing tokens to move across chains without the need for traditional wrapped assets or liquidity pools.

### How it Works
1.  **Lock/Burn:** Tokens are locked or burned on the source chain.
2.  **Messaging:** A cross-chain message is sent via LayerZero Endpoints.
3.  **Unlock/Mint:** The destination chain receives the message and unlocks or mints the equivalent amount of tokens for the user.
4.  **Security:** Uses decentralized Verifiers and Executors to ensure message integrity.



### Core Mechanics
* **Interoperability:** Move assets between any supported EVM chain.
* **Unified Liquidity:** Prevents liquidity fragmentation across multiple networks.
* **Flat Structure:** All deployment and contract logic is kept in the root for easy access.

### Quick Start
1. Install dependencies: `npm install`
2. Set up your LayerZero Endpoint addresses in `OFTToken.sol`.
3. Deploy to both networks using `deploy.js`.
4. Set peer contracts using the `setPeer` function to enable communication.
