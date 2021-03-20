let Web3 = require('web3');
export const web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws/v3/91be107102bd4d819ef9edd0cfed3147'));
export const { ethereum } = window;
