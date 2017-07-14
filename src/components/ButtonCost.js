import React, { Component } from 'react';

// import Foundation from 'react-foundation';
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

    // <div className="button-dropdown-arrows-example">
      <select 
        onChange={this.handleCostFilterChange}>
        <option defaultValue value="0">All</option>
        <option className="dropdown-item"value='100'>less than $1</option>
        <option value='200'>less than $2</option>
        <option value='300'>less than $3</option>
        <option value='500'>less than $5</option>
        <option value='1000'>less than $10</option>
      </select>
    // </div>
  //   <div className="dropdown">
  //   <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //     Dropdown button
  //   </button>
  //   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  //     <a className="dropdown-item" href="#">Action</a>
  //     <a className="dropdown-item" href="#">Another action</a>
  //     <a className="dropdown-item" href="#">Something else here</a>
  //   </div>
  // </div>
    );
  }

}
export default ButtonCost;
