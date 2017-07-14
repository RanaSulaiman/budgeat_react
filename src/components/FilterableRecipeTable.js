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
import ButtonIntolerance from './ButtonIntolerance'
import RecipeTable from './RecipeTable'

class FilterableRecipeTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
      dishtypeFilterText: '',
			costFilterText: "0",
			timeFilterText: "0",
			intoleranceFilterText: ''
    };

		this.handleDishTypeFilterChangeFilterSelect = this.handleDishTypeFilterChangeFilterSelect.bind(this);

    this.handleCostFilterSelect = this.handleCostFilterSelect.bind(this);

		this.handleTimeFilterSelect = this.handleTimeFilterSelect.bind(this);

		this.handleIntoleranceFilterSelect = this.handleIntoleranceFilterSelect.bind(this);

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

		handleIntoleranceFilterSelect(intoleranceFilterText) {
			this.setState({
				intoleranceFilterText : intoleranceFilterText
			});
		}

	render() {
		return (
      <div>
				<ButtonDishType onDishTypeFilterSelect={this.handleDishTypeFilterChangeFilterSelect}/>
        <ButtonCost onCostFilterSelect={this.handleCostFilterSelect}/>
				<ButtonTime onTimeFilterSelect={this.handleTimeFilterSelect}/>
				<ButtonIntolerance onIntoleranceFilterSelect={this.handleIntoleranceFilterSelect}/>



        <RecipeTable recipes={this.props.recipes} dishtypeFilterText={this.state.dishtypeFilterText} costFilterText={this.state.costFilterText}
				timeFilterText={this.state.timeFilterText}
				intoleranceFilterText={this.state.intoleranceFilterText}/>
			</div>
		);
	}

}

export default FilterableRecipeTable;
