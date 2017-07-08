import React, { Component } from 'react';
import Foundation from 'react-foundation'


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
  // <div>
    // <button data-dropdown="drop" aria-controls="drop" aria-expanded="false" class="large alert round button dropdown">Dropdown Button</button><br>
    // <ul id="drop" data-dropdown-content class="f-dropdown" role="menu" aria-hidden="false" tabindex="-1"
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
