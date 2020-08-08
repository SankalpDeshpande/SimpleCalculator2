import React from 'react';
import Display from './display/display';
import Buttons from './buttons/buttons';
import {calculate} from './Calculate/Calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    };
  }

  handleClick= (name) =>{
    this.setState(calculate(this.state, name));
  };

  render() {
    return (
      <div class="container-fluid">
        <div><Display value={this.state.next || this.state.total || "0"} operation={this.state.operation}/></div>
        <div><Buttons clickHandler={this.handleClick}/></div>
      </div>
    );
  }
}


