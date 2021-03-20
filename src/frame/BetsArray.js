import {Component} from "react";
import SingleBet from "./SingleBet";

export default class BetsArray extends Component {

    render() {
        let listItems = [];
        for (let i = 0; i < 10; i++) {
            listItems.push(<SingleBet id={i}/>)
        }
        return (
            <ul>{listItems}</ul>
        );

    }
}
