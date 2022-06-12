import Web3 from "web3";
import dotenv from "dotenv";

dotenv.config();

const abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "the_owner",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "landder_owner",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "latitude",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "longitude",
                "type": "uint256"
            }
        ],
        "name": "addLandMark",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "ipfs_doc_id",
                "type": "string"
            }
        ],
        "name": "addLegalDoc",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getLand",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "new_owner",
                "type": "address"
            }
        ],
        "name": "transferTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const web3 = new Web3(window.ethereum);
const land_smart_contract = async(land_address) => await new web3.eth.Contract(abi,land_address);

export default land_smart_contract;