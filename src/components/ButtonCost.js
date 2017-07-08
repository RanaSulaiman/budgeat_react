import React, { Component } from 'react';

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
    <select id = "cost-filter"
      onChange={this.handleCostFilterChange}>
      <option defaultValue value="0">All</option>
      <option value='100'>less than $1</option>
      <option value='200'>less than $2</option>
      <option value='300'>less than $3</option>
      <option value='500'>less than $5</option>
      <option value='1000'>less than $10</option>
    </select>
  );
  }

}
export default ButtonCost;
