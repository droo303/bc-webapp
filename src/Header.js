import React, {PureComponent} from "react";
import styled from 'styled-components';
import {Component} from "react/cjs/react.production.min";


export default class Header extends Component {
   constructor(props) {
       super(props);
       this.state = {
            scrolling: false,
            display: 'flex',
            color: 'red'
       }
       this.handleScroll=this.handleScroll.bind(this);
   }

   changeColor = () => {
     this.setState({
       color: 'blue'
     })

   }

    render() {
        return (
            <StyledHeader>
                <nav>
                    <Ul color={this.state.color}>
                        <Li color={this.state.color}><A href="#home">Home</A></Li>
                        <Li><A href="#news">News</A></Li>
                        <Li><A href="#contact">Contact</A></Li>
                        <Li><A className="active" href="#about">About</A></Li>
                    </Ul>
                </nav>
            </StyledHeader>
        );
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        if (window.scrollY === 0 && this.state.scrolling === true) {
            this.setState({scrolling: false});
        }
        else if (window.scrollY !== 0 && this.state.scrolling !== true) {
            this.setState({scrolling: true});
        }
    }
}

const Ul = styled.ul`
  background-color: #333;
  display: ${state => state.display};
  justify-content: center;
  align-items: center;
  max-width: 20%;
  margin: 0 auto;
  list-style: none;
  background-color : ${props => props.color};
`

const Li = styled.li`
  float: top;
  border-style: solid;
  border-color: #88922a;
  text-align: center;
  background-color : ${props => props.color};
  
`


const A = styled.a`
  display: block;
  padding: 8px;
  background-color: #dddddd;
  border-radius: 3px;
  

  :hover {
    background-color: #111;
  }
`


const StyledHeader = styled.header`
  padding : 8px;
`



