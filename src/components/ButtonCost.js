import React, { Component } from 'react';

import {Button} from 'react-bootstrap';


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
      <div className='button-gr'>
        <label className='button-lb' > Cost:- </label>
        <select className='filter'
          onChange={this.handleCostFilterChange}>
          <option defaultValue value="0">None</option>
          <option value='50'>under $0.5</option>
          <option value='100'>under $1.0</option>
          <option value='150'>under $1.5</option>
          <option value='200'>under $2.0</option>
          <option value='250'>under $2.5</option>
          <option value='500'>under $3.0</option>
          <option value='500'>under $4.0</option>

        </select>
      </div>
    );
  }

}
export default ButtonCost;
