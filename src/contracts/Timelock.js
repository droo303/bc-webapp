import TimelockContract from '../ABI/timelock.json'
import {TIMELOCK_CONTRACT_PRIVATE, web3} from '../utils/provider'
import {getAccounts} from '../utils/provider'

let contractInstance = null;
export const getContractInstance = () => {
    if (contractInstance === null) {
        contractInstance = new web3.eth.Contract(TimelockContract, TIMELOCK_CONTRACT_PRIVATE);
    }
    return contractInstance;
}

export const lockSingle = async (len, period, amount) => {
    const ci = await getContractInstance();
    const accounts = await getAccounts();

    ci.methods.lockSingle(len, period).send({
        from: accounts[0],
        gas: 4712388,
        gasPrice: 10000000,
        value: web3.utils.toWei(`${amount}`, "ether")
    })
}
export const lockDuo = async (len, period, partner, amount) => {
    const ci = await getContractInstance();
    const accounts = await getAccounts();

    ci.methods.lockDuo(len, period, partner).send({
        from: accounts[0],
        gas: 4712388,
        gasPrice: 10000000,
        value: web3.utils.toWei(`${amount}`, "ether")
    })
}
export const getLock = async (id) => {
    const ci = await getContractInstance();
    let ret = null;
    await ci.methods.getLock(id).call().then(lockResponse => {
        console.log(lockResponse);
        ret = {
            timestampLock: lockResponse[0],
            timestampUnlock: lockResponse[1],
            amount: lockResponse[2],
            in_use: lockResponse[3]
        };
    }, (e) => {
        if (!window.badNetwork) {
            alert("Couldn't find any TimeLocks, are you on the right network?");
            window.badNetwork = true;
        }
    })
    return ret;
}
export const getDuoLock = async (id) => {
    const ci = await getContractInstance();

    let lockResponse = await ci.methods.getDuoLock(id).call();
    return {
        id: lockResponse[0],
        sender: lockResponse[1],
        partner: lockResponse[2],
        timestampLock: lockResponse[3],
        timestampUnlock: lockResponse[4],
        amount: lockResponse[5],
        in_use: lockResponse[6]
    };
}
export const unlockSingle = async (id) => {
    const ci = await getContractInstance();
    const accounts = await getAccounts();
    return await ci.methods.unlockSingle(id).send({
        from: accounts[0]
    })
}
export const unlockDuo = async (id) => {
    const ci = await getContractInstance();
    return await ci.methods.unlockDuo(id)
}
export const acceptDuo = async (id) => {
    const ci = await getContractInstance();
    return await ci.methods.acceptDuoLock(id);
}



