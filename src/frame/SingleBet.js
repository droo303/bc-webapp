import React, {Component} from "react";
import {getBet} from "../contracts/Bets";

export default class SingleBet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adam: "",
            betty: "",
            amount: "",
            winner: ""
        }
        getBet(this.props.id).then((value => {this.setState({...value})}));
    }

    render() {

        return (
            <ul>
                <li>{this.state.adam}</li>
                <li>{this.state.betty}</li>
                <li>{this.state.value}</li>
                <li>{this.state.winner}</li>
            </ul>
        )
    }


}
