import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
      <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Button variant="contained" class="block" id="highlight" onClick={() => this.handleClick("AC")}>AC</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("+/-")}>+/-</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("%")}>%</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("/")}>/</Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("7")}>7</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("8")}>8</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("9")}>9</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("X")}>X</Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("4")}>4</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("5")}>5</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("6")}>6</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("-")}>-</Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("1")}>1</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("2")}>2</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("3")}>3</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("+")}>+</Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Button variant="contained" class="block" onClick={() => this.handleClick("0")}>0</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" class="block" onClick={() => this.handleClick(".")}>.</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" class="block" id="highlight" onClick={() => this.handleClick("=")}>=</Button>
        </Grid>
      </Grid>
      </div>
    );
  }
}