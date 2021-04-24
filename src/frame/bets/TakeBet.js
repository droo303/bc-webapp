import styled from 'styled-components';
import React, {Component} from "react";
import Blockies from 'react-blockies';
import {takeBet} from "../../contracts/Bets";
import {shortifyAddress} from "../../utils/utils";


export default class TakeBet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adam: "",
            betty: "",
            amount: "",
            winner: ""
        }
    }

    weiToEth = (amount) => {
        return amount / 1000000000000000000;
    }

    handleClickTakeBet = () => {
        const betId = this.props.id;
        const value = this.props.value;
        takeBet(betId, value).then(() => console.log("Accepted")).catch(e => console.log("Problem with Accepting"))
    }

    render() {
        let shortAdam = shortifyAddress(this.props.adam);

        return (
            <>
                <Span>Bet Versus</Span>
                <Span>
                    {shortAdam}
                    <Blockies seed={this.props.adam}/>
                </Span>
                <Span>{this.weiToEth(this.props.value)} ETH</Span>
                <button onClick={this.handleClickTakeBet}>Take Bet</button>
            </>
        )
    }
}

const Span = styled.span`
  padding: 0.5em;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  justify-content: space-evenly;
`
