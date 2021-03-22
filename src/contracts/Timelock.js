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

export const getTransactions = async (betId) => {
    const ci = await getContractInstance();
    let betResponse = await ci.methods.getBet(betId).call();
    return {adam: betResponse[0], betty: betResponse[1], value: betResponse[2], winner: betResponse[3]};
}

export const claimBet = async (betId, value) => {
    const ci = await getContractInstance();
    const accounts = await getAccounts();
    ci.methods.claim(betId).send({
        from: accounts[0],
        value: value
    }).on('transactionHash', (hash) => {
        console.log(hash, "hash")
    }).then(receipt => {
        console.log('Mined', receipt)
        if (receipt.status === '0x1' || receipt.status === 1) {
            console.log('Transaction Success')
        } else
            console.log('Transaction Failed')
    })
}

export const watchCreated = async () => {
    const ci = await getContractInstance()
    let event = ci.events.betCreated();
    event.watch(function (error, result) {
        if (!error)
            console.log(result);
    });
}




