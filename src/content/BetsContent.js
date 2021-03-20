import {Component} from "react";
import styled from 'styled-components';
import {createBet, getBet, subscribeToEvent, watchCreated} from '../contracts/Bets'
import BetsArray from "../frame/BetsArray";

export default class BetsContent extends Component {
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
                    <p>
                        This utility is called <em>betting</em>. You can offer a coinflip bet by locking an arbitrary
                        amount of ETH.
                        Anybody can accept the offer by locking the same amount.
                        Then one of the participants is randomly chosen as a winner and both of the locked halves are
                        sent to him.
                    </p>
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
