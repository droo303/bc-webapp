import React, {Component} from "react";
import {lockSingle} from "../../contracts/Timelock";
import {web3} from '../../utils/provider'
import greenCheckmark from '../../assets/greenCheckmark.png'
import styled from "styled-components";

export default class LockPrompt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            period: 0,
            amount: 1,
            len: 1,
            partnerInput: false,
            partnerAddress: "",
            showValid: false
        };
        this.handleChangePeriod = this.handleChangePeriod.bind(this);
        this.handleChangeLen = this.handleChangeLen.bind(this);
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.render = this.render.bind(this)
    }

    handleChangePeriod(event) {
        this.setState({period: event.target.value});
    }

    handleChangeLen(event) {
        this.setState({len: event.target.value});
    }

    handleChangeAmount(event) {
        this.setState({amount: event.target.value});
    }

    handleSubmit(event) {
        lockSingle(this.state.len, this.state.period, this.state.amount)
            .then(() => console.log("Created"))
            .catch(() => console.log("Failed"))
        event.preventDefault();
    }

    handleChangeCheckbox() {
        this.setState({partnerInput: !this.state.partnerInput})
    }

    handleChangeAddress(event) {
        this.setState({partnerAddress: event.target.value})
    }

    componentDidMount() {
        setInterval(() => this.setState({time: Date.now()}), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        const inputValid = (this.state.partnerInput && web3.utils.isAddress(this.state.partnerAddress));
        const buttonText = (this.state.partnerInput ? "LockDuo" : "Lock")
        return (

            <Div>
                <Span style={{textAlign: "center"}}>New lock</Span>
                <Form switchChecked={this.props.switchChecked} onSubmit={this.handleSubmit}>
                    {console.log(this.props)}
                    {/*Amount AMOUNT*/}
                    <span style={{textAlign: "center"}}>Amount</span>
                    <input type="number" min="1" size="1" value={this.state.amount}
                           onChange={this.handleChangeAmount}/>

                    {/*Length LEN PERIOD*/}
                    <span style={{textAlign: "center", gridColumn: 1}}>Length</span>
                    <input style={{gridColumn: 2}} type="number" min="1" size="1" value={this.state.len}
                           onChange={this.handleChangeLen}/>
                    <select value={this.state.period} onChange={this.handleChangePeriod}>
                        <option value={0}>Minutes</option>
                        <option value={1}>Hours</option>
                        <option value={2}>Days</option>
                        <option value={3}>Weeks</option>
                        <option value={4}>Months</option>
                        <option value={5}>Years</option>
                    </select>

                    {/*coditional INPUT*/}
                    {this.props.switchChecked ?
                      <span style={{gridColumn:1, gridRow:4, textAlign:"center"}}>Partner Address</span> : null }

                    {this.props.switchChecked ?
                        <input style={{gridColumn: "2/4", gridRow: 4, minWidth: 0}} type="text"
                               value={this.state.partnerAddress}
                               onChange={this.handleChangeAddress}/> : null}

                    {inputValid ?
                        <span><img style={{marginTop: "5px"}} src={greenCheckmark} alt={"valid"}
                                   width={"25px"}
                                   height={"25px"}/></span> : null}

                    {/*send button*/}
                    <input style={{gridColumn: 2 / 4, gridRow: 5}} type="submit" value={buttonText}/>
                </Form>
            </Div>

        )
    }

}

const Div = styled.div`
  display: grid;
  border: solid black;
`

const Span = styled.span`
  color: black;
`

const Form = styled.form`
  background-color: ${props => props.switchChecked ? "#cd1d78" : "#1759b8"};
  align-content: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`
