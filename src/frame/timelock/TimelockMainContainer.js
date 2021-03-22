import {Component} from "react";
import styled from "styled-components";
import TimelockArray from "./TimelockArray";
import TimelockText from "../../text/TimelockText";

export default class TimelockMainContainer extends Component {
    render() {
        return (
            <>
                <Div>
                    <TimelockText/>
                </Div>
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
