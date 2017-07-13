import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Foundation from 'react-foundation'
import PropTypes from 'prop-types'
// import ReactRouter from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
	Switch,
  Redirect
} from 'react-router-dom'

import FilterableRecipeTable from './FilterableRecipeTable'

import {fetchRailsData} from '../utils/RailsApi'

// hardcoded data

class FilterRecipes extends Component {
  // constructor
  // allRecipes: call functon
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: []
    };
  }

  componentDidMount(){
    fetchRailsData().then((data) => {
      this.setState({allRecipes: data});
      console.log(this.state.allRecipes);

    });
  }


	render() {
    // console(this.state.allRecipes)
    console.log("xxxxxxxxxxxxx");
		return (
      <div>
        <FilterableRecipeTable recipes={this.state.allRecipes}/>
      {/* this.state.allrecipes */}
      </div>

		);
	}
}

export default FilterRecipes;
