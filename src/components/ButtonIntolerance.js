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
      <div className='button-gr'>

        <label className='button-lb' > Intolerances:- </label>

        <select className='filter'
          onChange={this.handleIntoleranceFilterChange}>
          <option defaultValue value=''>None</option>
          <option value='gluten free'>gluten free</option>
          <option value='vegan'>dairy free</option>

        </select>

      </div>
  );
  }

}
export default ButtonIntolerance;
