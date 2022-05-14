const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname,"build");
fs.removeSync(buildPath);

const landderPath = path.resolve(__dirname,"contracts","Landder.sol");
const source = fs.readFileSync(landderPath,'utf8');

var input = {
    language: 'Solidity',
    sources: {
        'Landder': {content : source}
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts.Landder;

fs.ensureDir(buildPath);
for(let contract in output){
    fs.outputJSONSync(path.resolve(buildPath,contract.replace(':','') + '.json'),output[contract]);
}