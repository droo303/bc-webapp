import TimelockContract from '../ABI/timelock.json'
import {ethereum, web3} from '../utils/provider'

let contractInstance = null;
export const getContractInstance = async () => {
    if (contractInstance === null) {
        const contractAddress = '0x924A8D187D70C40A72e24f7B3f4B73A13f4a895c';
        contractInstance = new web3.eth.Contract(TimelockContract, contractAddress);
    }
    return contractInstance;
}

export const getAccounts = async () => {
    return await ethereum.request({method: 'eth_requestAccounts'});
}

export const createTimelock = async (len, period, amount) => {
    const ci = await getContractInstance();
    const accounts = await getAccounts();

    ci.methods.lockAmount(len, period, amount).send({
        from: accounts[0],
        value: web3.utils.toWei(`${amount}`, "ether")
    })
}




