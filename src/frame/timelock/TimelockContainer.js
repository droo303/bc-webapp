import {Component} from "react";
import styled from "styled-components";
import TimelockArray from "./TimelockArray";

export default class TimelockContainer extends Component {
    render() {
        return (
            <>
                <P>Timelock</P>
                <Div>
                    <TimelockArray/>
                </Div>
            </>

        )
    }
}

const Div = styled.div`
  margin: 5em;
  padding: 5em;
  border-style: solid;
  border-width: 0.1em;
  background-color: white;
`
const P = styled.p`
  color: white;
  font-size: 4em;
  text-align: center;
  font-family: Arial,sans-serif;
  font-style: italic;
`
