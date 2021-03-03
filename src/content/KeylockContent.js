import {Component} from "react";
import styled from "styled-components";

export default class KeylockContent extends Component {

    render() {
        return (
            <div>
                <Div>
                    <p>
                        <em>Timelock</em> tresor is tool which lets you lock arbitrary amounts of ETH for arbitrary
                        amount
                        of time.
                        Might be useful if you want to protect yourself from your own intentions of selling.
                        Interesting thing about this utility is that you can lock the funds together with other people.
                        It means that you can be absolutely sure none of the participants is spending until the timelock
                        is
                        over.
                    </p>
                </Div>
                <Div>
                    <button>Keylock</button>
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
