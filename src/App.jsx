import React from 'react';
import Display from './display/display';
import Buttons from './buttons/buttons';
import {calculate} from './Calculate/Calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: null,
      num2: null,
      operation: null
    };
  }

  handleClick= (name) =>{
    const result = calculate(this.state, name);
    this.setState({
      num1: result.num1,
      num2: result.num2,
      operation: result.operation
    });
  };

  render() {
    return (
      <div class="container-fluid">
        <div><Display number1={this.state.num1} number2={this.state.num2} operator={this.state.operation}/></div>
        <div><Buttons clickHandler={this.handleClick}/></div>
      </div>
    );
  }
}


