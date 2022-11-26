import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const {
  GOERLI_RPC_PROVIDER,
  WALLET_PRIVATE_KEY,
} = process.env;

const config: HardhatUserConfig = {
  networks: {
    goerli: {
      url: GOERLI_RPC_PROVIDER,
      accounts: [WALLET_PRIVATE_KEY!],
    },
  },
  solidity: "0.8.17",
};

export default config;
