import React, {Component} from "react";
import {getLock, unlockSingle} from "../../contracts/Timelock";
import {weiToEth} from "../../utils/provider";
import styled from "styled-components";
import {claimBet} from "../../contracts/Bets";

export default class SingleTimelock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timestampLock: "",
            timestampUnlock: "",
            amount: "",
            in_use: false
        }
    }

    componentDidMount = () => {
        getLock(this.props.id).then((r) => {
                this.setState({...r});
                console.log(r);
            }
        )
        setInterval(() => this.setState({time: Date.now()}), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleUnlock = () => {
        const timelockId = this.props.id;
        unlockSingle(timelockId).then(() => console.log("Timelock " + {timelockId} + "unlocked"));
        this.render();
    }

    render() {
        const timestampUnlock = new Date(this.state.timestampUnlock * 1000);
        const dateUnlock = timestampUnlock.toDateString();
        const timeUnlock = timestampUnlock.toLocaleTimeString('en-US');
        const amount = weiToEth(this.state.amount);
        const locked = Date.now() < timestampUnlock;

        if (this.state.in_use === true) {
            return (
                <Div>
                    <p>{amount} ETH locked
                        until {dateUnlock} {timeUnlock} {new Date(Date.now()).toLocaleTimeString('en-US')}</p>
                    <button disabled={locked} onClick={this.handleUnlock}>Unlock</button>
                </Div>
            )
        } else return null
    }
}

const Div = styled.div`
  border: solid;
  margin: 1px;
  padding: 1px;
`
