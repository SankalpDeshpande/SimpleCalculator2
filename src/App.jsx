import React from 'react';
import Display from './display/display';
import Buttons from './buttons/buttons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 6,
      next: null,
      operation: null
    };
  }

  handleClick= (name) =>{
    console.log(name);
  };

  render() {
    return (
      <div class="container-fluid">
        <div><Display number={this.state.total}/></div>
        <div><Buttons clickHandler={this.handleClick}/></div>
      </div>
    );
  }
}


