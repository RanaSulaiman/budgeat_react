import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import RecipeTable from '../components/RecipeTable'
import ButtonCost from '../components/ButtonCost'
import ButtonTime from '../components/ButtonTime'
import ButtonCuisine from '../components/ButtonCuisine'
// import ReactRouter from 'react-router-dom'
import { Router, Route, Switch } from 'react-router-dom'
import Nav from '../components/Nav'

import Foundation from 'react-foundation'
import PropTypes from 'prop-types'

// var Router = require('react-router').Router
// var Route = require('react-router').Route


class FilterableRecipeTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
      cuisineFilterText: "",
			costFilterText: "0",
			timeFilterText: "0"
    };

		this.handleCuisineFilterSelect = this.handleCuisineFilterSelect.bind(this);

    this.handleCostFilterSelect = this.handleCostFilterSelect.bind(this);

		this.handleTimeFilterSelect = this.handleTimeFilterSelect.bind(this);
  }

  // handleCostFilterSelect(costSelect) {
  //   this.costFilterText = costSelect
	// }

		handleCuisineFilterSelect(cuisineFilterText) {
			this.setState({
				cuisineFilterText : cuisineFilterText
			});
		}

    handleCostFilterSelect(costFilterText) {
      this.setState({
        costFilterText : costFilterText
      });
    }

		handleTimeFilterSelect(timeFilterText) {
			this.setState({
				timeFilterText : timeFilterText
			});
		}

	render() {
		return (
      <div>
				{/* <Router> */}
					{/* <Nav /> */}

				<ButtonCuisine onCuisineFilterSelect={this.handleCuisineFilterSelect}/>
        <ButtonCost onCostFilterSelect={this.handleCostFilterSelect}/>
				<ButtonTime onTimeFilterSelect={this.handleTimeFilterSelect}/>

        <RecipeTable recipes={this.props.recipes} cuisineFilterText={this.state.cuisineFilterText} costFilterText={this.state.costFilterText} timeFilterText={this.state.timeFilterText}/>
				{/* </Router> */}

			</div>
		);
	}

}

export default FilterableRecipeTable;
