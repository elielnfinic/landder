const dotenv = require("dotenv");
dotenv.config();

const HDWwalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const compiledLandder = require(path.resolve(__dirname,"build","Landder.json"));

const provider = new HDWalletProvider(
    process.env.MNEMONIC_STRINC,
    process.env.INFURA_URL
);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledLandder.interface))
                            .deploy({data : compiledLandder.byteCode})
                            .send({gas : '1000000',from : accounts[0]});

    provider.engine.stop();
}

deploy();