import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Display extends React.Component {
  static propTypes = {
    number1: PropTypes.string,
    number2: PropTypes.string,
    operator: PropTypes.string
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="jumbotron">
        <div class="displayNumber">{this.props.number1}{this.props.operator}{this.props.number1}</div>
      </div>
    );
  }
}