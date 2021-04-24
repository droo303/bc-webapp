import React, {Component} from "react";
import styled from 'styled-components';
import {ethereum, isMetaMaskInstalled} from "../utils/provider";

export default class Header extends Component {
   constructor(props) {
       super(props);
       this.state = {
           button_text: '',
           account: ''
       }
   }

   componentDidMount() {
        isMetaMaskInstalled() ? this.setState({button_text:"Connect to wallet"}) : this.setState({button_text:"Install"});
   }

   async handleClick() {
       try {
           if (this.state.button_text === "Install") {
           } else if (this.state.button_text === "Connect to wallet") {
               const accounts = await ethereum.request({method: 'eth_requestAccounts'});
               this.setState({account: accounts[0]});
           }
       } catch (e) {
           console.error(e);
       }
   }

    render() {
        return (
            <StyledHeader>
                    <Nav>
                        <Button>Home</Button>
                        <Span>Connected to account: {this.state.account} </Span>
                        <Button onClick={this.handleClick.bind(this)}>{this.state.button_text}</Button>
                    </Nav>
            </StyledHeader>
        );
    }
}

const Span = styled.span`
  background-color: white;
  color: black;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  list-style: none;
`

const Button = styled.button`
  display: block;
  box-shadow: 0.25em 0.25em black;
  background-color: white;
  border-radius: 3px;
  :hover {
    background-color: bisque;
  }

  :focus {
    background-color: bisque;
  }
`

const StyledHeader = styled.header`
  padding : 8px;
`
