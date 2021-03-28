import BetsContainer from "./bets/BetsContainer";
import InfoContent from "../content/InfoContent";
import React, {Component} from "react";
import TimelockContainer from "./timelock/TimelockContainer";
import styled from 'styled-components';

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
            </Div>
        )
    }
}

const Div = styled.div`
  grid-column: 2;
  grid-row: 1 / 3; 
`
