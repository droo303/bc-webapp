import {Component} from "react";
import styled from 'styled-components';

export default class BetsContent extends Component {

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
                    <button>Create Bet</button>
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
