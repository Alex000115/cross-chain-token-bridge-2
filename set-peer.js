const hre = require("hardhat");

async function main() {
  const localOFTAddress = "0x...";
  const remoteChainId = 30101; // LayerZero unique chain ID
  const remoteOFTAddress = "0x..."; // The address on the other chain

  const MyOFT = await hre.ethers.getContractAt("MyOFTToken", localOFTAddress);
  
  // Convert remote address to bytes32 as required by LayerZero
  const remoteAddressBytes32 = hre.ethers.zeroPadValue(remoteOFTAddress, 32);

  const tx = await MyOFT.setPeer(remoteChainId, remoteAddressBytes32);
  await tx.wait();

  console.log("Peer set successfully! Chains are now linked.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
