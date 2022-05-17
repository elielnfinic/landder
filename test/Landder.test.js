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

const {abi, evm} = compiledLandder;
//const {land_abi, land_evm} = compiledLand;
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    //console.log("Solde est " + await web3.eth.getBalance(accounts[0]));

    landder = await new web3.eth.Contract(abi)
        .deploy({data : evm.bytecode.object})
        .send({from : accounts[0],gas : '3000000'});
    
    await landder.methods.createLand().send({
            from : accounts[1],
            gas : '1000000',
            value : web3.utils.toWei('0.25','ether')
         });
    
    const [new_land] = await landder.methods.getDeployedLands().call();

    land = await new web3.eth.Contract(compiledLand.abi,new_land);
});

describe('Landder',() =>{
    it("can be deployed",() => {
        //console.log("Deployed here ",landder);
        assert.ok(landder);
    });

    it("can add a land",async() => {        
        assert.ok(land);
    });

    it("can get added lands", async() => {
        const lands = await landder.methods.getDeployedLands().call();
        assert.ok(lands);
    });

    it("marks caller as the owner of land", async () => {
        const the_owner = await land.methods.getLand().call();
        assert.equal(accounts[1],the_owner[0]);
    });

    it("requires payement to register a land",async() => {
        try{
            await landder.methods.createLand().send({
                from : accounts[1],
                gas : '1000000'
             });
            
            assert(false);
        }catch(ex){
            assert(true);
        }
        
    });

    it("adds landmark", async () => {
        try{
            await land.methods.addLandMark("32982899328","328983928").send({
                from : accounts[1],
                value : web3.utils.toWei("0.05","ether"),
                gas : "1000000"
            });
            assert(true);
        }catch(ex){
            assert(false);
        }        
    });

    it("requires to be owner to add landmark", async() => {
        try{
            await land.methods.addLandMark("32982899328","328983928").send({
                from : accounts[0],
                value : web3.utils.toWei("0.05","ether"),
                gas : "1000000"
            });
            assert(false);
        }catch(ex){
            assert(true);
        }
    });

    it("requires to pay to add landmark",async() => {
        try{
            await land.methods.addLandMark("32982899328","328983928").send({
                from : accounts[0],
                gas : "1000000"
            });
            assert(false);
        }catch(ex){
            assert(true);
        }
    });

    it("retrieves land info", async() => {
        const land_info = await land.methods.getLand().call();
        assert(land_info[3]);
    });
});