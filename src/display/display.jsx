import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from '@material-ui/core/Container';

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    operation: PropTypes.string
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container fixed class="displayClass">
        <div class="displayNumber">{this.props.value}</div>
        <div class="displayOperator"> Operator:{this.props.operation ? this.props.operation : "nill"}</div>
        </Container>
    );
  }
}