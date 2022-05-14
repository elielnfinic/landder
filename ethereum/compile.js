const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");


const buildPath = path.resolve(__dirname,"build");
fs.removeSync(buildPath);

const landderPath = path.resolve(__dirname,"contracts","Landder.sol");
const source = fs.readFileSync(landderPath,'utf8');
const output = solc.compile(source,1).contracts;
console.log(output);

fs.ensureDir(buildPath);
for(let contract in output){
    fs.outputJSONSync(path.resolve(buildPath,contract.replace(':','') + '.json'),output[contract]);
}