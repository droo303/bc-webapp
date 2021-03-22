import React, { Component } from "react";
import MainButtonsContainer from "./MainButtonsContainer";
import Header from "./Header";
import styled from 'styled-components';
import background from '../assets/background-1280_1920.png'
import ContentWrapper from "./ContentWrapper";

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
          <Header/>
          <MainButtonsContainer onClick={this.handleClick}/>
          <ContentWrapper content={this.state.content}/>
        </Div>
    );
  }
}

const Div = styled.div`
  background-image: url(${background});
  background-size: cover;
  min-height: 100vh;
`
