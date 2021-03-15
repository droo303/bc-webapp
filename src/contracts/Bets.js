import BetsContract from '../ABI/bet.json'
import {web3} from '../utils/provider'

var contractInstance = null;
export const getContractInstance = async () => {
    if (contractInstance === null) {
        const contractAddress = '0xBc95F9A920FF3d5Ca0E601fa04a333a7aC538A47';
        contractInstance = new web3.eth.Contract(BetsContract, contractAddress);
    }
    return contractInstance;
}

export const createBet =  async (betId, value) => {
    const ci = await getContractInstance()
    await ci.methods.createBet(betId).send({
        from: '0xc415A6f6F38cA6d0996F77f70C4eD89cD7851157',
        value: web3.utils.toWei(`${value}`, "ether")})
}

export const getBet = async (betId) => {
    const ci = await getContractInstance()
    return await ci.methods.getBet(betId).call();
}

export const watchCreated = async () => {
    const ci = await getContractInstance()
    let event = ci.events.betCreated();
    event.watch(function(error, result){
        if (!error)
            console.log(result);
    });
}

