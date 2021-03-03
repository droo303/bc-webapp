import React, {Component} from "react";
import styled from 'styled-components';


const { ethereum } = window;
const isMetaMaskInstalled = () => {
    return Boolean(ethereum && ethereum.isMetaMask);
};

const MetaMaskClientCheck = () => {
    if (!isMetaMaskInstalled()) {
        return String("Install");
    } else {
        return String("Connect to wallet");
    }
};

export default class Header extends Component {
   constructor(props) {
       super(props);
       this.state = {
           button_text: ''
       }
   }

   componentDidMount() {
        this.setState({button_text: MetaMaskClientCheck()})
   }

   async handleClick() {
       try {
           if (this.state.button_text === "Install") {
                // TODO open installation
           } else if (this.state.button_text === "Connect to wallet") {
               await ethereum.request({method: 'eth_requestAccounts'});}
       } catch (e) {
           console.error(e);
       }
   }

    render() {
        return (
            <StyledHeader>
                    <Nav>
                        <Button>Home</Button>
                        <Button onClick={this.handleClick.bind(this)}>{this.state.button_text}</Button>
                    </Nav>
            </StyledHeader>
        );
    }
}

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
