import styled from 'styled-components';
import React, {Component} from "react";
import Blockies from 'react-blockies';
import {claimBet} from "../../contracts/Bets";


export default class ClaimBet extends Component {

    weiToEth = (amount) => {
        return amount / 1000000000000000000;
    }

    parseAddress = (addr) => {
        return addr.substring(0, 4) + "..." + addr.substring(39, 41);
    }

    handleOnClickClaim = () => {
        const betId = this.props.id;
        claimBet(betId).then(() => console.log("Claimed")).catch(e => console.log("Problem with Accepting"))
    }

    render() {
        let shortAdam = this.parseAddress(this.props.adam);
        let shortBetty = this.parseAddress(this.props.betty);
        let shortWinner = this.parseAddress(this.props.winner);

        return (
            <>
                <Span>
                    {shortAdam}
                    <Blockies seed={this.props.adam}/>
                </Span>
                <Span>
                    {shortBetty}
                    <Blockies seed={this.props.betty}/>
                </Span>
                <Span>{this.weiToEth(this.props.value) * 2} ETH</Span>
                <Span>
                    {shortWinner}
                    <Blockies seed={this.props.winner}/>
                </Span>
                <button onClick={this.handleOnClickClaim}>Claim Prize</button>
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
