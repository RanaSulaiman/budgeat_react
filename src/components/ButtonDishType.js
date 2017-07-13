import React, { Component } from 'react';
// import Foundation from 'react-foundation'


class ButtonDishType extends Component {
  constructor(props) {
  super(props);
  this.handleDishTypeFilterChange = this.handleDishTypeFilterChange.bind(this);
  }

  handleDishTypeFilterChange(e) {
    this.props.onDishTypeFilterSelect(e.target.value);
  }

  render() {
    return (
    <select id = 'dish-type-filter'
      onChange={this.handleDishTypeFilterChange}>
      <option defaultValue value=''>All</option>
      <option value='main course'>main course</option>
      <option value='drink'>drink</option>
      <option value='snack'>snack</option>
      <option value='salad'>salad</option>
      <option value='soup'>soup</option>
    </select>
    );
  }

}
export default ButtonDishType;
