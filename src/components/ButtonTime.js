import React, { Component } from 'react';

class ButtonTime extends Component {
  constructor(props) {
  super(props);
  this.handleTimeFilterChange = this.handleTimeFilterChange.bind(this);
  }

  handleTimeFilterChange(e) {
    this.props.onTimeFilterSelect(e.target.value);
  }

  render() {
    return (
    <select id = "time-filter"
      onChange={this.handleTimeFilterChange}>
      <option defaultValue value="0">Select Time</option>
      <option value= '15'>less than 100</option>
      <option value= '30' >less than 155</option>
      <option value= '50'>less than 200</option>
    </select>
  );
  }

}
export default ButtonTime;
