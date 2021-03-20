import {Component} from "react";
import SingleBet from "./SingleBet";
import styled from 'styled-components';

export default class BetsArray extends Component {

    render() {
        let listItems = [];
        for (let i = 0; i < 10; i++) {
            listItems.push(<SingleBet key={i} id={i}/>)
        }
        return (
            <Div>{listItems}</Div>
        );

    }
}

const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
`
