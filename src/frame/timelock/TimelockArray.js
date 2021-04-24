import React, {Component} from "react";
import SingleTimelock from "./SingleTimelock";
import {getLock, lockSingle} from "../../contracts/Timelock";
import styled from "styled-components";
import DuoTimelock from "./DuoTimelock";
import LockPrompt from "./LockPrompt";
import Switch from "react-switch";

export default class TimelockArray extends Component {
    constructor(props) {
        super(props);
        this.state = {
            period: 0,
            amount: 1,
            len: 1,
            showSingle: true,
            switchChecked: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeSwitch = this.handleChangeSwitch.bind(this);
    }

    handleSubmit(event) {
        lockSingle(this.state.len, this.state.period, this.state.amount)
            .then(() => console.log("Created"))
            .catch(() => console.log("Failed"))
        event.preventDefault();
    }

     handleChangeSwitch(switchChecked) {
        this.setState({switchChecked})

    }



    render() {
        let singleLocks = [];
        let duoLocks = [];
        for (let i = 0; i < 10; i++) {
            singleLocks.push(<SingleTimelock key={i} id={i}/>)
            duoLocks.push(<DuoTimelock key={10 + i} id={i}/>)
        }

        const showSingle = !this.state.switchChecked;
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center", borderBottom:"solid", marginBottom:"2em", paddingBottom:"2em"}}>
                    <span style={{marginRight:"1em"}}>Single</span>
                    <Switch onChange={this.handleChangeSwitch} checked={this.state.switchChecked} uncheckedIcon={false}
                            checkedIcon={false} offColor={'#1759b8'} onColor={'#cd1d78'}/>
                    <span style={{marginLeft: "1em"}}>Duo</span>
                </div>
                <Grid>
                    <LockPrompt switchChecked = {this.state.switchChecked}/>

                    {showSingle && <Div>{singleLocks}</Div>}
                    {!showSingle && <Div>{duoLocks}</Div>}
                </Grid>
            </div>
        )
    }
}

const Div = styled.div`
  padding: 1em;
  margin: 1em;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);;
`

