import {Component} from "react";
import styled from 'styled-components';
import {getBet } from '../../contracts/Bets'
import BetsArray from "./BetsArray";

export default class BetsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            betsArr: ["foo","bar"]
        }
        this.fill = this.fill.bind(this)
    }

    fill = async () => {
        let arr = []
        for (let i = 0; i < 10; i++) {
            try {
                let bet = await getBet(i);
                arr.push(bet);
            } catch(err) {
                console.log(err);
            }
        }
        this.setState({betsArr:arr});
    }

    render() {
        return (
            <>
                <P>Bets</P>
                <BetsArray/>
            </>

        )
    }
}

const P = styled.p`
  color: white;
  font-size: 4em;
  text-align: center;
  font-family: Arial,sans-serif;
  font-style: italic;
`
