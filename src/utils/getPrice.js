import aggregator from '../ABI/aggregator.json'
import {web3} from './provider'

export let getETH_USD = () => {
    const addr = "0x9326BFA02ADD2366b30bacB125260Af641031331"; //kovan
    const priceFeed = new web3.eth.Contract(aggregator, addr);
    return priceFeed.methods.latestRoundData().call();
};

export let getBTC_ETH = () => {
    const addr = "0xF7904a295A029a3aBDFFB6F12755974a958C7C25"; //kovan
    const priceFeed = new web3.eth.Contract(aggregator, addr);
    return priceFeed.methods.latestRoundData().call();
};

export let getXAU_USD = () => {
        const addr = "0xc8fb5684f2707C82f28595dEaC017Bfdf44EE9c5"; //kovan
        const priceFeed = new web3.eth.Contract(aggregator, addr);
        return priceFeed.methods.latestRoundData().call();
};
