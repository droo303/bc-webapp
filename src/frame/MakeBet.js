import styled from 'styled-components';
import React, {Component} from "react";
import {createBet, getBet} from "../contracts/Bets";


export default class MakeBet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adam: "",
            betty: "",
            amount: "",
            winner: ""
        }
    }

    handleClickCreate = () => {
        const betId = this.props.id;
        const value = document.getElementById("value").value;
        createBet(betId,value).then(() => console.log("Created")).catch(e => console.log("Problem with Creation"))
    }

    render() {
        return (
            <>
                <Span>Make Bet</Span>
                <Input id="value"/>
                <button onClick={this.handleClickCreate}>Make Bet</button>
            </>
        )
    }
}

const Span = styled.span`
  padding: 0.5em;
  display: grid;
  align-items: center;
  grid-template-columns: auto;
  justify-content: space-evenly;
`

const Input = styled.input`
    min-width: 80%;
    max-width: 100%;
`
