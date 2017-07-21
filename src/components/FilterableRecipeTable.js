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
	render() {
		return (
				<div className='container'>
					<div className={'row','all-buttons'}>
						<div className='col-lg-3 col-md-4 col-sm-6'><ButtonDishType  onDishTypeFilterSelect={this.props.onDishTypeFilterSelect}/></div>
	        	<div className='col-lg-3 col-md-4 col-sm-6'><ButtonCost  onCostFilterSelect={this.props.onCostFilterSelect}/>
						</div>
						<div className='col-lg-3 col-md-4 col-sm-6'><ButtonTime  onTimeFilterSelect={this.props.onTimeFilterSelect}/>
						</div>
						<div className='col-lg-3 col-md-4 col-sm-6'><ButtonIntolerance  onIntoleranceFilterSelect={this.props.onIntoleranceFilterSelect}/>
						</div>

					</div>{/* row */}

					<div className='row'>
						<div className='col search-all'>

			        <RecipeTable recipes={this.props.recipes} dishtypeFilterText={this.props.dishtypeFilterText} costFilterText={this.props.costFilterText}
							timeFilterText={this.props.timeFilterText}
							intoleranceFilterText={this.props.intoleranceFilterText} loading={this.props.loading} />
						</div>
					</div>
				</div>//container
		);
	}
}

export default FilterableRecipeTable;
