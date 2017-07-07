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
      <option defaultValue value="0">Select Cost</option>
      <option value= '100'>less than 100</option>
      <option value= '155' >less than 155</option>
      <option value= '200'>less than 200</option>
    </select>
  );
  }

}
export default ButtonCost;
