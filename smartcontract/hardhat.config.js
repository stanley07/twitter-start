require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");

const dotenv = require("dotenv");
const { task } = require("hardhat/config");







dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9", 
  networks: {
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://testnet-rpc.coinex.net'),
      network_id: 53,
      gasPrice: 500000000000
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rpc.coinex.net'),
      network_id: 52,
      gasPrice: 500000000000
    },
  },
  mocha: {
    timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.8.17"
    }
  }
};
