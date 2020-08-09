import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';

export default class Buttons extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };
  constructor() {
    super();
  }

  handleClick = (name) => {
    this.props.clickHandler(name);
  };

  render() {
    return (
      <div class="container">
        <div class="row form-group">
          <div class="col-md-3">
            <Button variant="contained" class="block" id="highlight" onClick={() => this.handleClick("AC")}>AC</Button>
          </div>
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick("+/-")}>+/-</Button>
          </div>
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick("%")}>%</Button>
          </div>
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick("/")}>/</Button>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick("7")}>7</Button>
          </div>
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick("8")}>8</Button>
          </div>
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick("9")}>9</Button>
          </div>
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick("X")}>X</Button>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick("4")}>4</Button>
          </div>
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick("5")}>5</Button>
          </div>
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick("6")}>6</Button>
          </div>
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick("-")}>-</Button>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick("1")}>1</Button>
          </div>
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick("2")}>2</Button>
          </div>
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick("3")}>3</Button>
          </div>
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick("+")}>+</Button>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-6">
            <Button variant="contained" class="block" onClick={() => this.handleClick("0")}>0</Button>
          </div>
          <div class="col-md-3">
            <Button variant="contained" class="block" onClick={() => this.handleClick(".")}>.</Button>
          </div>
          <div class="col-md-3">
            <Button variant="contained" class="block" id="highlight" onClick={() => this.handleClick("=")}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}