import React, { Component } from 'react';

class ButtonCuisine extends Component {
  constructor(props) {
  super(props);
  this.handleCuisineFilterChange = this.handleCuisineFilterChange.bind(this);
  }

  handleCuisineFilterChange(e) {
    this.props.onCuisineFilterSelect(e.target.value);
  }

  render() {
    return (
    <select id = "cuisine-filter"
      onChange={this.handleCuisineFilterChange}>
      <option defaultValue value="">All</option>
      <option value='american'>american</option>
      <option value='european'>european</option>
      <option value='mexican'>mexican</option>
      <option value='italian'>italian</option>
      <option value='greek'>greek</option>
      <option value='european'>european</option>
      <option value='indian'>indian</option>
      <option value='mediterranean'>mediterranean</option>
    </select>
  );
  }

}
export default ButtonCuisine;
