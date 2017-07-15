import React, { Component } from 'react';
// import Button from 'react-bootstrap';

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
      <div className='button-gr'>
        <label className='button-lb'>Time:- </label>
        {/* <div> */}
        <select className='filter' 
        onChange={this.handleTimeFilterChange}>
        <option defaultValue value="0">None</option>
        <option value='15'>under 15 min</option>
        <option value='30'>under 30 min</option>
        <option value='45'>under 45 min</option>
        <option value='60'>under 60 min</option>
        <option value='120'>under 2 hours</option>
        </select>
        {/* </div> */}
      </div>


  );
  }

}
export default ButtonTime;
