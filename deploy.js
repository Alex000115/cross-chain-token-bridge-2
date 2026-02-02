const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // LayerZero Endpoint Addresses (Example: Sepolia & Mumbai)
  const LZ_ENDPOINT = "0x6EDDE65947B34803517FE999962e45540438a99b"; 

  const MyOFT = await hre.ethers.getContractFactory("MyOFTToken");
  const oft = await MyOFT.deploy(
    "OmniToken",
    "OTK",
    LZ_ENDPOINT,
    deployer.address
  );

  await oft.waitForDeployment();

  console.log(`OFT Token deployed to: ${await oft.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
