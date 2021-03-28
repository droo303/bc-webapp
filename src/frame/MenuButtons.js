import React, {Component} from "react";
import styled from 'styled-components';
import keylock from '../assets/keylock.png'
import coinflip from '../assets/coin_flip.png'
import info from '../assets/info.svg'


export default class MenuButtons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Div>
                <StyledButton onClick={this.props.onClick.bind(this, "info")}>
                    <Img src={info} alt="info"/>
                </StyledButton>
                <StyledButton onClick={this.props.onClick.bind(this, "coinflip")}>
                    <Img src={coinflip} alt="coinflip"/>
                </StyledButton>
                <StyledButton onClick={this.props.onClick.bind(this, "keylock")}>
                    <Img src={keylock} alt='keylock'/>
                </StyledButton>
                <StyledButton>
                    <Img src={null} alt={null}/>
                </StyledButton>
            </Div>
        );
    }
}

const Div = styled.div`
  grid-column: 1;
  position: static;
  justify-content: center;
  display: block;
  margin-top: 3em;
  width: auto;
`

const Img = styled.img`
  position: static;
  width: 5em;
  height: 5em;
`

const StyledButton = styled.button`
  width: 10em;
  height: 10em;
  box-shadow: 0.25em 0.25em black;
  border-radius: 0.5em;
  background-color: white;

  :hover {
    background-color: bisque;
  }

  :focus {
    background-color: bisque;
  }
`

