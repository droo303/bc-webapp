import {Component} from "react";
import styled from 'styled-components';

export default class TimelockArray extends Component {

    render() {
        return(
            <p>It works</p>
        )
    }
}

const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
`
