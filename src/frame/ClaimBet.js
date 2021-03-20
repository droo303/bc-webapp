import styled from 'styled-components';
import React, {Component} from "react";
import Blockies from 'react-blockies';


export default class ClaimBet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adam: "",
            betty: "",
            amount: "",
            winner: ""
        }
    }

    parseAddress = (addr) => {
        return addr.substring(0,4) + "..." + addr.substring(39,41);
    }

    render() {
        let shortAdam = this.parseAddress(this.state.adam);
        let shortBetty = this.parseAddress(this.state.betty);
        let shortWinner = this.parseAddress(this.state.winner);

        return (
            <Div>
                <Span>
                    {shortAdam}
                    <Blockies seed={this.state.adam}/>
                </Span>
                <Span>
                    {shortBetty}
                    <Blockies seed={this.state.betty}/>
                </Span>
                <span>{this.state.value}</span>
                <Span>
                    {shortWinner}
                    <Blockies seed={this.state.winner}/>
                </Span>
                <button>Claim Prize</button>
            </Div>
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

const Div = styled.div`
    border-style: solid;
    border-radius: 5%;
    margin: 2em;
    display: grid;
    width: 10em;
`
