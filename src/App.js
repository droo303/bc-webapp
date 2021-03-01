import React, { PureComponent } from "react";
import Buttons from "./Buttons";
import Content from "./Content";
import Header from "./Header";
import styled from 'styled-components';
import background from './assets/background-1280_1920.png'

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <Div>
          <Header/>
          <Buttons/>
          <Content/>
        </Div>
    );
  }
}

const Div = styled.div`
  background-image: url(${background});
  background-size: cover;
  min-height: 100vh;
`
