import React, { Component } from 'react';

class ButtonIntolerance extends Component {
  constructor(props) {
  super(props);
  this.handleIntoleranceFilterChange = this.handleIntoleranceFilterChange.bind(this);
  }

  handleIntoleranceFilterChange(e) {
    this.props.onIntoleranceFilterSelect(e.target.value);
  }

  render() {
    return (
    <select id = "intolerance-filter"
      onChange={this.handleIntoleranceFilterChange}>
      <option defaultValue value=''>All</option>
      <option value='gluten free'>gluten free</option>
      <option value='dairy free'>dairy free</option>

    </select>
  );
  }

}
export default ButtonIntolerance;
