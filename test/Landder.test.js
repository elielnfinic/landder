const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

const compiledLandder = require("../ethereum/build/Landder.json");
const compiledLand = require("../ethereum/build/Land.json");

let accounts;
let landder;
let landAddress;
let land;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    console.log(accounts);
});

describe('Landder',async() =>{
    it("starts running",() => {
        assert.ok(accounts);
    });
});