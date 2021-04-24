let Web3 = require('web3');

export const web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws/v3/91be107102bd4d819ef9edd0cfed3147'));

export const { ethereum } = window;

export const getAccounts = async () => {
    return await ethereum.request({method: 'eth_requestAccounts'});
}

export const isMetaMaskInstalled = () => {
    return Boolean(ethereum && ethereum.isMetaMask);
};

export let badNetwork = false;

export const BETS_CONTRACT_PRIVATE = '0xf2621be69B4920B9086D973a7beBe82F486B4d52';
export const TIMELOCK_CONTRACT_PRIVATE = '0x83556a6ce076494FCDf3D076701640B02d4B3781';

export const weiToEth = (amount) => {
    return amount / 1000000000000000000;
}
