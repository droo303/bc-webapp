import React, {Component} from "react";
import {isMetaMaskInstalled, ethereum} from "../utils/provider";
import Blockies from "react-blockies";
import Web3 from "web3";
import styled from 'styled-components';

export default class FooterAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            btnText: "",
            account: "",
            shortAcc: ""
        }
        this.handleClick=this.handleClick.bind(this)
    }

    componentDidMount() {
        if (!isMetaMaskInstalled()) {this.setState({btnText: "Install Metamask"})}
        else {
            this.setState({btnText: "Connect to wallet"});
        }
    }

     async handleClick() {
        try {
            if (this.state.btnText === "Install Metamask") {
                window.open("https://metamask.io/");
            } else if (this.state.btnText === "Connect to wallet") {
                const accounts = await ethereum.request({method: 'eth_requestAccounts'});

                this.setState({
                    account: Web3.utils.toChecksumAddress(accounts[0]),
                    btnText: "Conected"
                });
            }
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <Div>
                <button onClick={this.handleClick}>{this.state.btnText}</button>
                {this.state.account === "" ? null : <> <input size={34} readOnly value={this.state.account}/> <Blockies seed={this.state.account}/> </>}
            </Div>
        )
    }
}

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  overflow: hidden;
  border-style: solid;
  grid-row: 4;
  grid-column: 2/3;
`






