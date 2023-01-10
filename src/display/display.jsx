import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    operation: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="containerDiv">
        <div className="displayOperator">
          <h1>
            Operator:{this.props.operation ? this.props.operation : "nill"}
          </h1>
        </div>
        <div className="displayNumber">
          <h1>{this.props.value}</h1>
        </div>
      </div>
    );
  }
}
