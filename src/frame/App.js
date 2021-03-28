import React, { Component } from "react";
import MenuButtons from "./MenuButtons";
import styled from 'styled-components';
import background from '../assets/eth.jpg'
import ContentWrapper from "./ContentWrapper";
import FooterAccount from "./FooterAccount";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
        content: ""
    };
  }

  async handleClick(clicked){
      console.log(clicked);
      await this.setState({content: clicked});
  }

  render() {
    return (
        <Div>
            <MenuButtons onClick={this.handleClick}/>
            <FooterAccount/>
            <ContentWrapper content={this.state.content}/>
        </Div>
    );
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
