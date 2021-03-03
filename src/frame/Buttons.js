import React, {Component} from "react";
import styled from 'styled-components';
import keylock from '../assets/keylock.png'
import coinflip from '../assets/coin_flip.png'
import info from '../assets/info.svg'


export default class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text_info: 'This page serves few interesting utilities build on the Ethereum blockchain.\n' +
                'Each <em>utility</em> provides a brief description of its code in smart contracts.\n' +
                'Feel free to use or get inspired by them.',
            text_keylock: '<em>Timelock</em> tresor is tool which lets you lock arbitrary amounts of ETH for arbitrary amount of time.\n' +
                'Might be useful if you want to protect yourself from your own intentions of selling.\n' +
                'Interesting thing about this utility is that you can lock the funds together with other people.\n' +
                'It means that you can be absolutely sure none of the participants is spending until the timelock is over.',
            text_coinflip: ' This utility is called <em>betting</em>. You can offer a coinflip bet by locking an arbitrary amount of ETH.\n' +
                'Anybody can accept the offer by locking the same amount.\n' +
                'Then one of the participants is randomly chosen as a winner and both of the locked halves are sent to him.'
        }
    }


    render() {
        return (
            <Div>
                <StyledButton onClick={this.props.onClick.bind(this,"info")}>
                    <Img src={info} alt="info"/>
                </StyledButton>
                <StyledButton onClick={this.props.onClick.bind(this,"coinflip")}>
                    <Img src={coinflip} alt="coinflip"/>
                </StyledButton>
                <StyledButton onClick={this.props.onClick.bind(this,"keylock")}>
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
  position: static;
  justify-content: center;
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin-top: 3em;
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

