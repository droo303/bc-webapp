import React, { PureComponent } from "react";
import Buttons from "./Buttons";
import Content from "./Content";
import Header from "./Header";


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div>
          <Buttons> </Buttons>
            <Content/>
        </div>
    );
  }
}
