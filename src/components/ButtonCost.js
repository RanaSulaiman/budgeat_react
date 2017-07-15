import React, { Component } from 'react';

// import Foundation from 'react-foundation';
import {Button} from 'react-bootstrap';


class ButtonCost extends Component {
  constructor(props) {
  super(props);
  this.handleCostFilterChange = this.handleCostFilterChange.bind(this);
  }

  handleCostFilterChange(e) {
    this.props.onCostFilterSelect(e.target.value);
  }

  render() {
    return (
      <select
        onChange={this.handleCostFilterChange}>
        <option defaultValue value="0">All</option>
        <option value='50'>less than $0.5</option>
        <option value='100'>less than $1.0</option>
        <option value='150'>less than $1.5</option>
        <option value='200'>less than $2.0</option>
        <option value='250'>less than $2.5</option>
        <option value='500'>less than $3.0</option>
        <option value='500'>less than $4.0</option>

      </select>
    );
  }

}
export default ButtonCost;
