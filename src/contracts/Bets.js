import BetsContract from '../ABI/bet.json'
import {ethereum, web3} from '../utils/provider'

let contractInstance = null;
export const getContractInstance = async () => {
    if (contractInstance === null) {
        const contractAddress = '0x31Edd1Ddf4933D33bE0a0D86fbCF96f79b814c7B';
        contractInstance = new web3.eth.Contract(BetsContract, contractAddress);
    }
    return contractInstance;
}

export const getAccounts = async () => {
    return await ethereum.request({method: 'eth_requestAccounts'});
}

export const subscribeToEvent = async () => {
    const ci = await getContractInstance()
    ci.events.betCreated({
        fromBlock: 0
    }, function (error, event) {
        if (error) {
            window.alert("Error: ", error);
        } else {
            console.log(event, "event");
        }
    })
}

export const getBet = async (betId) => {
    const ci = await getContractInstance();
    let betResponse = await ci.methods.getBet(betId).call();
    return {adam: betResponse[0], betty: betResponse[1], value: betResponse[2], winner: betResponse[3]};
}

export const createBet = async (betId, value) => {
    const ci = await getContractInstance();
    const accounts = await getAccounts();

    ci.methods.createBet(betId).send({
        from: accounts[0],
        value: web3.utils.toWei(`${value}`, "ether")
    }).on('transactionHash', (hash) => {
        console.log(hash, "hash")
    })
        .on('confirmation', (confirmationNumber, receipt) => {
            console.log(confirmationNumber, receipt, "cn")
        });
}

export const takeBet = async (betId, value) => {
    const ci = await getContractInstance();
    const accounts = await getAccounts();

    ci.methods.acceptBet(betId).send({
        from: accounts[0],
        value: value
    }).on('transactionHash', (hash) => {
        console.log(hash, "hash")
    }).on('confirmation', (confirmationNumber, receipt) => {
        console.log(confirmationNumber, receipt, "cn")
    });
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

