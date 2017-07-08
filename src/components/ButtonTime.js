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
      <option defaultValue value="0">All</option>
      <option value='15'>less than 15 min</option>
      <option value='30'>less than 30 min</option>
      <option value='60'>less than 1 hour</option>
      <option value='120'>less than 2 hours</option>
      <option value='240'>less than 4 hours</option>
    </select>
  );
  }

}
export default ButtonTime;
