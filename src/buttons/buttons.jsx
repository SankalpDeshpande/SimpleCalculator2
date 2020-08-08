import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Buttons extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };
  constructor(){
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
            <button type="button" class="btn btn-success block" onClick={() => this.handleClick("AC")}>AC</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("+/-")}>+/-</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("%")}>%</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("/")}>/</button>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("7")}>7</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("8")}>8</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("9")}>9</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("X")}>X</button>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("4")}>4</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("5")}>5</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("6")}>6</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("-")}>-</button>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("1")}>1</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("2")}>2</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("3")}>3</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("+")}>+</button>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-6">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("0")}>0</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick(".")}>.</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={()=>this.handleClick("=")}>=</button>
          </div>
        </div>
      </div>
    );
  }
}