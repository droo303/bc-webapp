import {Component} from "react";

export default class BetsText extends Component {
    render() {
        return (
            <p>
                This utility is called <em>betting</em>. You can offer a coinflip bet by locking an arbitrary
                amount of ETH.
                Anybody can accept the offer by locking the same amount.
                Then one of the participants is randomly chosen as a winner and both of the locked halves are
                sent to him.
            </p>
        )
    }
}

