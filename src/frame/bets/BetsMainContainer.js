import {Component} from "react";
import styled from 'styled-components';
import {createBet, getBet, subscribeToEvent, watchCreated} from '../../contracts/Bets'
import BetsArray from "./BetsArray";
import BetsText from "../../text/BetsText";

export default class BetsMainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            betsArr: ["foo","bar"]
        }
        this.fill = this.fill.bind(this)
    }

    handleClickGet = () => {
        const betId = document.getElementById("betId").value;
        getBet(betId).then((c) => console.log(c,"Bet exists")).catch(e => console.log("Bot not found"));
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
            <div>
                <Div>
                   <BetsText/>
                </Div>
                <Div>
                    <BetsArray/>
                </Div>
            </div>

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
