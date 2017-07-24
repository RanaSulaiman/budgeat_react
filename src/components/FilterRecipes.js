// Function: Gets recipes data from API
// Returns 1-FilterableRecipeTable(filtered buttons and recipes list) 2-pagination
// Gets called by: App.js
// Calls: FilterableRecipeTable

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Foundation from 'react-foundation'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link,
	Switch,
  Redirect
} from 'react-router-dom'

import FilterableRecipeTable from './FilterableRecipeTable'
import {fetchRailsData} from '../utils/RailsApi'

class FilterRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: [],
      filteredRecipes: [],
      loading: true,
      currentPage: 1,
      lastPage: 1,
      recipesPerPage: 24,
      dishtypeFilterText: '',
			costFilterText: "0",
			timeFilterText: "0",
			intoleranceFilterText: ''
    };

    this.handleClick = this.handleClick.bind(this);

		this.handleDishTypeFilterSelect = this.handleDishTypeFilterSelect.bind(this);

    this.handleCostFilterSelect = this.handleCostFilterSelect.bind(this);

		this.handleTimeFilterSelect = this.handleTimeFilterSelect.bind(this);

		this.handleIntoleranceFilterSelect = this.handleIntoleranceFilterSelect.bind(this);

  }

	handleDishTypeFilterSelect(dishtypeFilterText) {
		this.setState({
			dishtypeFilterText : dishtypeFilterText
		}, this.filter);
	}

  handleCostFilterSelect(costFilterText) {
    this.setState({
      costFilterText : costFilterText
		}, this.filter);
  }

	handleTimeFilterSelect(timeFilterText) {
		this.setState({
			timeFilterText : timeFilterText
		}, this.filter);
	}

	handleIntoleranceFilterSelect(intoleranceFilterText) {
		this.setState({
			intoleranceFilterText : intoleranceFilterText
		}, this.filter);
	}

  handleClick(event){
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  clickPreviousPage(){
    var page = this.state.currentPage;

    var prevPage = page - 1;
    console.log("xxxxx currentPage: " + page);
    console.log("xxxxx prevPage: " + prevPage);

    if (page > 1) {
      console.log('I am in the if statement');
      this.setState({
        currentPage: prevPage
      });
    }
  }

  clickNextPage(){
    var page = this.state.currentPage;
    var lastPage = Math.ceil(this.state.filteredRecipes.length / this.state.recipesPerPage);

    var nextPage = page + 1;

    if (page < lastPage) {
      this.setState({
        currentPage: nextPage
      });
    }
  }

  componentDidMount(){
    fetchRailsData().then((data) => {
      this.setState({allRecipes: data, filteredRecipes: data, loading: false});
      console.log(this.state.allRecipes);
    });
  }

  filter() {
    var filteredList = this.state.allRecipes;

    if(this.state.dishtypeFilterText !== '') {
      filteredList = filteredList.filter((recipe) => {
        // console.log("cuisine filter: " + this.props.cuisineFilterText);
        // console.log("recipe cuisines: " + recipe.cuisines);
        return recipe.dish_type.includes(this.state.dishtypeFilterText);
      });
    }

    if(this.state.costFilterText !== "0") {
      filteredList = filteredList.filter((recipe) => {
        return recipe.price_serving <= Number(this.state.costFilterText);
      });
    }

    if (this.state.timeFilterText !== "0") {
      filteredList = filteredList.filter((recipe) => {
        return recipe.ready_time <= Number(this.state.timeFilterText);
      });
    }

    if (this.state.intoleranceFilterText !== '') {
      filteredList = filteredList.filter((recipe) => {
        return recipe.diets.includes(this.state.intoleranceFilterText);
      });
    }

    this.setState({currentPage: 1, filteredRecipes: filteredList, lastPage: Math.ceil(filteredList.length / this.state.recipesPerPage)})
  }

	render() {
    const { filteredRecipes, currentPage, recipesPerPage } = this.state;

    // Logic for displaying current recipes
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredRecipes.length / recipesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <a
          className='page-link'
          href='#'
          key={number}
          id={number}
          onClick={this.handleClick}
        >
        {number}
        </a>
      );
    });

    console.log("xxxx render currentPage:" + currentPage);
    // onFilterUpate will fix pagination after filter change
    return (
      <div className='container'>
        <FilterableRecipeTable
          recipes={currentRecipes}
          dishtypeFilterText={this.state.dishtypeFilterText}
          costFilterText={this.state.costFilterText}
          intoleranceFilterText={this.state.intoleranceFilterText}
          timeFilterText={this.state.timeFilterText}
          onDishTypeFilterSelect={this.handleDishTypeFilterSelect}
          onCostFilterSelect={this.handleCostFilterSelect}
          onTimeFilterSelect={this.handleTimeFilterSelect}
          onIntoleranceFilterSelect={this.handleIntoleranceFilterSelect}
          loading={this.state.loading}
          onFilterUpdate={this.onFilterUpate}
        />

{/* BOOTSTRAP VERSION */}
        <nav aria-label='Search Page navigation' className='text-center'>
          <ul className='pagination '>

            <li className='page-item'
                onClick={() => this.clickPreviousPage()}>
              <a className='page-link' href='#'>Prev</a>
            </li>

            <li className='page-item'>{renderPageNumbers}</li>

            <li className='page-item'
                onClick={() => this.clickNextPage()}>
              <a className="page-link" href='#'>Next</a>
            </li>
          </ul>
        </nav>
      </div>
    );
	}
}

export default FilterRecipes;
