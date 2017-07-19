import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'


import Nav from './Nav'
import ButtonCost from './ButtonCost'
import ButtonTime from './ButtonTime'
import ButtonDishType from './ButtonDishType'
import ButtonIntolerance from './ButtonIntolerance'
import RecipeTable from './RecipeTable'
import ButtonTest from './ButtonTest'
// import { SplitButton } from 'react-bootstrap';
// import { MenuItem } from 'react-bootstrap';



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
      // <div>
				<div className={'container',  'button-spacing'}>
					<ul className={'row-fluid','all-buttons'}>
						<li className='col-sm-3'>
					<ButtonDishType  onDishTypeFilterSelect={this.handleDishTypeFilterChangeFilterSelect}/></li>
	        <li className='col-sm-3'><ButtonCost  onCostFilterSelect={this.handleCostFilterSelect}/></li>
					<li className='col-sm-3'><ButtonTime  onTimeFilterSelect={this.handleTimeFilterSelect}/></li>
					<li className='col-sm-3'><ButtonIntolerance  onIntoleranceFilterSelect={this.handleIntoleranceFilterSelect}/></li>

					{/* <ButtonTest/> */}
				</ul> {/* row */}

				<div className='row'>
					<div className='col'>

        <RecipeTable recipes={this.props.recipes} dishtypeFilterText={this.state.dishtypeFilterText} costFilterText={this.state.costFilterText}
				timeFilterText={this.state.timeFilterText}
				intoleranceFilterText={this.state.intoleranceFilterText} loading={this.props.loading} />
			</div>
		</div>
		</div>

		);
	}

}

export default FilterableRecipeTable;
