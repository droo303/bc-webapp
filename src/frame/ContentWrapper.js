import React, {Component} from "react";
import styled from "styled-components";
import BetsContainer from "./bets/BetsContainer";
import InfoContent from "../content/InfoContent";
import TimelockContainer from "./timelock/TimelockContainer";
import FolioContainer from "./portfolio/FolioContainer";
import WalletContainer from "./wallet/walletContainer";

export default class ContentWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ""
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.content !== nextProps.content) {
            return {...nextProps};
        }
        return null;
    }

    render() {
        return (
            <Div>
                {this.state.content === "info" && <InfoContent/>}
                {this.state.content === "coinflip" && <BetsContainer/>}
                {this.state.content === "keylock" && <TimelockContainer/>}
                {this.state.content === "portfolio" && <FolioContainer/>}
                {this.state.content === "wallet" && <WalletContainer/>}
            </Div>
        )
    }
}

const Div = styled.div`
  grid-column: 2;
  grid-row: 1 / 3; 
`
