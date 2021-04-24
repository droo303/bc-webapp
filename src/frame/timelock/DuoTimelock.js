import React, {Component} from "react";
import {getDuoLock} from "../../contracts/Timelock";
import {weiToEth} from "../../utils/provider";
import styled from "styled-components";

export default class DuoTimelock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            sender: "",
            partner: "",
            timestampLock: "",
            timestampUnlock: "",
            amount: "",
            accepted: false,
            in_use: false
        }
    }

    componentDidMount = () => {
        getDuoLock(this.props.id).then((r) => {
                this.setState({...r});
                console.log(r);
            }
        )
    }

    render() {
        const timestampUnlock = new Date(this.state.timestampUnlock * 1000);
        const dateUnlock = timestampUnlock.toDateString();
        const timeUnlock = timestampUnlock.toLocaleTimeString('en-US');
        const amount = weiToEth(this.state.amount);

        if (this.state.in_use === true) {
            return (
                <Div>
                    <span>{amount} ETH</span>
                    <span>locked until</span>
                    <span>{dateUnlock}</span>
                    <span>{timeUnlock}</span>
                </Div>
            )} else return null
    }
}

const Div = styled.div`
  border: solid;
`
