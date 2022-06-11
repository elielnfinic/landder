import Web3 from "web3";

export const signInWithMetaMask = async () => {
    const accounts = await window.ethereum.request({method : "eth_requestAccounts"});
    if(window.localStorage) window.localStorage.user_addr = accounts[0];
    return new Web3(window.ethereum);
}
