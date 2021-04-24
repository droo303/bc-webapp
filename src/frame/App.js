import React, {Component} from "react";
import MenuButtons from "./MenuButtons";
import styled from 'styled-components';
import background from '../assets/eth.jpg'
import ContentWrapper from "./ContentWrapper";
import FooterAccount from "./FooterAccount";
import {web3} from "../utils/provider";

export default class App extends Component {
    constructor(props) {

        window.badNetwork = false;
        super(props);
        this.state = {
            content: "",
            networkType: "kovan"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        web3.eth.net.getNetworkType((err, netString) => {
            console.log(netString);
            this.setState({networkType: netString})
        })
    }

    async handleClick(clicked) {
        console.log(clicked);
        await this.setState({content: clicked});
    }

    render() {
        if (this.state.networkType === 'private') {
            return (
                <Div>
                    <MenuButtons onClick={this.handleClick}/>
                    <FooterAccount/>
                    <ContentWrapper content={this.state.content}/>
                </Div>
            )
        } else {
            return (
                <Appeal>
                    <Whitebox>
                        You have to connect your Metamask to a local network for this app to work.
                    </Whitebox>
                </Appeal>
            )
        }
    }
}

const Div = styled.div`
  display: grid;
  grid-template-columns: 10em auto 10em;
  grid-template-rows: auto 10em;
  background-image: url(${background});
  background-size: cover;
  min-height: 100vh;
  box-sizing: border-box;
`

const Appeal = styled.div`
  background-image: url(${background});
  background-size: cover;
  min-height: 100vh;
  box-sizing: border-box;
`
const Whitebox = styled.div`
  background-color: white;
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`
