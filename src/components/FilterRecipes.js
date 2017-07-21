
// jj
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

  clickPreviousPage(props){
    // let page = Number(event.target.page);
    // var page = this.props.currentPage;
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
      }); //forEach
    }

    if(this.state.costFilterText !== "0") {
      filteredList = filteredList.filter((recipe) => {
        return recipe.price_serving <= Number(this.state.costFilterText);
      }); //forEach
    }

    if (this.state.timeFilterText !== "0") {
      filteredList = filteredList.filter((recipe) => {
        return recipe.ready_time <= Number(this.state.timeFilterText);
      }); //forEach
    }

    if (this.state.intoleranceFilterText !== '') {
      filteredList = filteredList.filter((recipe) => {
        return recipe.diets.includes(this.state.intoleranceFilterText);
      }); //forEach
    }

    this.setState({ currentPage: 1, filteredRecipes: filteredList })
  }

	render() {
    // console(this.state.allRecipes)
    // console.log("xxxxxxxxxxxxx");
    const { filteredRecipes, currentPage, recipesPerPage } = this.state;
    // this.setState({lastPage: Math.ceil(filteredRecipes.length / recipesPerPage)});
    // const lastPage = this.state.lastPage;

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
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    console.log("xxxx render currentPage:" + currentPage);
    // onFilterUpate will fix pagination after filter change
    return (
      <div>
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
        <ul id="page-numbers">
          <li page={currentPage}
              onClick={() => this.clickPreviousPage(currentPage)}
          >{"<"}</li>
          {renderPageNumbers}
        </ul>
      </div>
    );
	}
}

export default FilterRecipes;
