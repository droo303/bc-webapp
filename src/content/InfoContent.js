import React, {Component} from "react";
import styled from "styled-components";

export default class InfoContent extends Component {

    render() {
        return (
            <Div>
                <p>
                    This page serves few interesting utilities build on the Ethereum blockchain.
                    Each <em>utility</em> provides a brief description of its code in smart contracts.
                    Feel free to use or get inspired by them.
                </p>
            </Div>
        )
    }
}

const Div = styled.div`
  margin: 5em;
  padding: 1em;
  border-style: solid;
  border-width: 0.1em;
  background-color: white;
`
