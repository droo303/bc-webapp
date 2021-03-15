import {Component} from "react";
import styled from 'styled-components';
import { createBet,getBet, watchCreated } from '../contracts/Bets'

export default class BetsContent extends Component {

    handleClickCreate = () => {
        const betId = document.getElementById("betId").value;
        const value = document.getElementById("value").value;
        createBet(betId,value).then(() => console.log("Created")).catch(e => console.log("Problem with Creation"))
    }

    handleClickGet = () => {
        const betId = document.getElementById("betId").value;
        const bet = getBet(betId)
        console.log(bet)
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
                    <form>
                        <input type="text" id="betId"/>
                        <input type="text" id="value"/>
                    </form>
                    <button onClick={this.handleClickCreate}>Create Bet</button>
                    <button onClick={this.handleClickGet}>Get Bet</button>
                    <button onClick={watchCreated}>Watch Bet</button>
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
