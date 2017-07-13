import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import ReactRouter from 'react-router-dom'
import { Router, Route, Switch } from 'react-router-dom'
import Foundation from 'react-foundation'
import PropTypes from 'prop-types'

import Nav from './Nav'
// import RecipeTable from './RecipeTable'
import ButtonCost from './ButtonCost'
import ButtonTime from './ButtonTime'
import ButtonDishType from './ButtonDishType'
import RecipeTable from './RecipeTable'

class FilterableRecipeTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
      dishtypeFilterText: "",
			costFilterText: "0",
			timeFilterText: "0"
    };

		this.handleDishTypeFilterChangeFilterSelect = this.handleDishTypeFilterChangeFilterSelect.bind(this);

    this.handleCostFilterSelect = this.handleCostFilterSelect.bind(this);

		this.handleTimeFilterSelect = this.handleTimeFilterSelect.bind(this);
  }


		handleDishTypeFilterChangeFilterSelect(dishtypeFilterText) {
			this.setState({
				dishtypeFilterText : dishtypeFilterText
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
				<ButtonDishType onDishTypeFilterSelect={this.handleDishTypeFilterChangeFilterSelect}/>
        <ButtonCost onCostFilterSelect={this.handleCostFilterSelect}/>
				<ButtonTime onTimeFilterSelect={this.handleTimeFilterSelect}/>

        <RecipeTable recipes={this.props.recipes} dishtypeFilterText={this.state.dishtypeFilterText} costFilterText={this.state.costFilterText} timeFilterText={this.state.timeFilterText}/>
			</div>
		);
	}

}

export default FilterableRecipeTable;
