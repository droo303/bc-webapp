import styled from 'styled-components';
import React, {Component} from "react";
import Blockies from 'react-blockies';


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
        return amount/1000000000000000000;
    }

    parseAddress = (addr) => {
        return addr.substring(0,4) + "..." + addr.substring(39,41);
    }

    render() {
        let shortAdam = this.parseAddress(this.props.adam);

        return (
            <div>
                <Span>Bet Versus</Span>
                <Span>
                    {shortAdam}
                    <Blockies seed={this.props.adam}/>
                </Span>
                <Span>{this.weiToEth(this.props.value)} ETH</Span>
                <button>Take Bet</button>
            </div>
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

