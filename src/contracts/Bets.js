import BetsContract from '../ABI/bet.json'
import {web3, BETS_CONTRACT_PRIVATE} from '../utils/provider'
import {getAccounts} from '../utils/provider'

let contractInstance = null;
export const getContractInstance = async () => {
    if (contractInstance === null) {
        contractInstance = new web3.eth.Contract(BetsContract, BETS_CONTRACT_PRIVATE);
    }
    return contractInstance;
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
    let ret = null;
    await ci.methods.getBet(betId).call().then(value => {
            ret =  {adam: value[0], betty: value[1], value: value[2], winner: value[3]};
        }, (e) => {if (!window.badNetwork) {alert("Couldn't find bets, are you on the right network?"); window.badNetwork = true;}}
    );
    return ret;
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

export const claimBet = async (betId) => {
    const ci = await getContractInstance();
    const accounts = await getAccounts();
    ci.methods.claim(betId).send({
        from: accounts[0],
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

