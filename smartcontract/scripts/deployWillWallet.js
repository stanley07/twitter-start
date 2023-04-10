
const hre = require("hardhat");

async function main() {
  
  
  

  const WillWallet = await hre.ethers.getContractFactory("WillWallet");
  const willwallet = await WillWallet.deploy();

  await willwallet.deployed();

  console.log(
    "WillWallet deployed to:", willwallet.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0)
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
}));

