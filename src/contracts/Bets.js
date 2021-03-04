import BetsContract from '../ABI/bet.json'
import { web3 } from '../utils/provider'

var contractInstance = null;
export const setContractInstance = async () => {
    const contractAddress = '0xBc95F9A920FF3d5Ca0E601fa04a333a7aC538A47';
    contractInstance = new web3.eth.Contract(BetsContract, contractAddress);
}

export const createBet =  async (betId, value) => {
    await setContractInstance()
    await contractInstance.methods.createBet(betId).send({
        from: '0xc415A6f6F38cA6d0996F77f70C4eD89cD7851157',
        value: web3.utils.toWei(`${value}`, "ether")}).catch(console.log("reject"))
}
