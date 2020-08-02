import React from 'react';
import './display.css';

export default class Display extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
        <div class="jumbotron">
            <div class="displayNumber">{this.props.number}</div>
        </div>
      );
    }
  }