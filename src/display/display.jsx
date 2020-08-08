import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    operation: PropTypes.string
  };

  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.value);
    return (
      <div class="jumbotron">
        <div class="displayNumber">{this.props.value}</div>
        <div class="displayOperator"> Operator:{this.props.operation ? this.props.operation : "nill"}</div>
      </div>
    );
  }
}