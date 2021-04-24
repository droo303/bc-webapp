import styled from 'styled-components';
import React, {Component} from "react";
import {getBet} from "../../contracts/Bets";
import MakeBet from "./MakeBet";
import TakeBet from "./TakeBet";
import ClaimBet from "./ClaimBet";


const addressZero = "0x0000000000000000000000000000000000000000";
export default class SingleBet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adam: "",
            betty: "",
            value: "",
            winner: "",
            err: false
        }
    }

    componentDidMount = () => {
        getBet(this.props.id).then(value => {
            this.setState({...value,id: this.props.id})
        }).catch((e) => {throw(e)})
    }

    render() {
        if (this.state.adam === addressZero) {
            return (
                <Div>
                    <MakeBet {...this.state}/>
                </Div>
            )
        } else if (this.state.betty === addressZero) {
            return (
                <Div>
                    <TakeBet {...this.state}/>
                </Div>
            )
        } else if (this.state.winner !== addressZero) {
            return (
                <Div>
                    <ClaimBet {...this.state}/>
                </Div>
            )
        }
    }
}

const Div = styled.div`
  border-style: solid;
  border-radius: 2%;
  margin: 2em;
  display: grid;
  width: 10em;
  background-color: white;
`
