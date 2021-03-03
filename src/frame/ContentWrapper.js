import BetsContent from "../content/BetsContent";
import InfoContent from "../content/InfoContent";
import React, {Component} from "react";
import KeylockContent from "../content/KeylockContent";

export default class ContentWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ""
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.content !== nextProps.content) {
            return {...nextProps};
        }
        return null;
    }

    render() {
        return (
            <div>
                {this.state.content === "info" && <InfoContent/>}
                {this.state.content === "coinflip" && <BetsContent/>}
                {this.state.content === "keylock" && <KeylockContent/>}
            </div>
        )
    }
}
