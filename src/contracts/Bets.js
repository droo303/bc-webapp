import BetsContract from '../ABI/bet.json'
import {web3} from '../utils/provider'

var contractInstance = null;
export const getContractInstance = async () => {
    if (contractInstance === null) {
        const contractAddress = '0x31Edd1Ddf4933D33bE0a0D86fbCF96f79b814c7B';
        contractInstance = new web3.eth.Contract(BetsContract, contractAddress);
    }
    return contractInstance;
}

export const createBet =  async (betId, value) => {
    const ci = await getContractInstance()
    return await ci.methods.createBet(betId).send({
        from: '0xc415A6f6F38cA6d0996F77f70C4eD89cD7851157',
        value: web3.utils.toWei(`${value}`, "ether")})
}

export const getBet = async (betId) => {
    const ci = await getContractInstance();
    let betResponse = await ci.methods.getBet(betId).call();
    return {adam: betResponse[0],betty: betResponse[1],value: betResponse[2],winner: betResponse[3]};
}

export const watchCreated = async () => {
    const ci = await getContractInstance()
    let event = ci.events.betCreated();
    event.watch(function(error, result){
        if (!error)
            console.log(result);
    });
}

