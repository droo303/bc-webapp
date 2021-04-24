import {Component} from "react";
import styled from "styled-components";
import {getAccounts} from '../../utils/provider'

export default class WalletContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ""
        }
    }
    render() {
        let acc = getAccounts()
        return (
            <Div>
                <label>Enter wallet seed</label>
                <input/>
                <button>Create from seed</button>
                You are currently connected to address: {acc[0]}
            </Div>
        );
    }
}

const Div = styled.div`
  margin: 5em;
  padding: 1em;
  border-style: solid;
  border-width: 0.1em;
  background-color: white;
`
