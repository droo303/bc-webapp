import React, {Component} from "react";
import {getETH_USD} from "../../utils/getPrice"

export default class ShowPrice extends Component {

    handleClick = () => {
        getETH_USD().then((data) => {
            document.getElementById("EthPrice").value = data.answer.substring(0,4);
        });
    }


    render() {
        return (
            <>
                <input id="EthPrice"/>
                <button onClick={this.handleClick}>
                Get Latest Eth
                </button>
            </>
        );
    }
}
