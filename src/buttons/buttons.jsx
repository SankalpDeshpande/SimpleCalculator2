import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Buttons extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };
  constructor(){
    super();
  }

  handleClick = (event) => {
    this.props.clickHandler(event.target.innerText);
  };

  render() {
    return (
      <div class="container">
        <div class="row form-group">
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>AC</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>+/-</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>%</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>/</button>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>7</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>8</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>9</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>*</button>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>4</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>5</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>6</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>-</button>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>1</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>2</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>3</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>+</button>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-6">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>0</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>.</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-success block" onClick={this.handleClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}