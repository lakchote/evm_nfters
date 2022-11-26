import { ethers } from "hardhat";

async function main() {
  const nftersFactory = await ethers.getContractFactory("NFTers");
  const nfters = await nftersFactory.deploy();

  await nfters.deployed();
  console.log(`NFTERS contract deployed to ${nfters.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
