
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
      loading: true,
      currentPage: 1,
      lastPage: 1,
      recipesPerPage: 24
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  previousPage(){
    // let page = Number(event.target.page);
    let page = this.state.currentPage;

    let prevPage = page - 1;
    console.log("xxxxx currentPage: " + page);
    console.log("xxxxx prevPage: " + prevPage);

    if (page > 1) {
      this.setState({
        currentPage: prevPage
      });
    }
  }

  componentDidMount(){
    fetchRailsData().then((data) => {
      this.setState({allRecipes: data, loading: false});
      console.log(this.state.allRecipes);

    });
  }


	render() {
    // console(this.state.allRecipes)
    // console.log("xxxxxxxxxxxxx");
    const { allRecipes, currentPage, recipesPerPage } = this.state;
    // this.setState({lastPage: Math.ceil(allRecipes.length / recipesPerPage)});
    // const lastPage = this.state.lastPage;

    // Logic for displaying current recipes
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allRecipes.length / recipesPerPage); i++) {
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
    return (
      <div>
        <FilterableRecipeTable recipes={currentRecipes} loading={this.state.loading} />
        <ul id="page-numbers">
          <li page={currentPage}
              onClick={this.previousPage}
          >{"<"}</li>
          {renderPageNumbers}
        </ul>
      </div>
    );
	}
}

export default FilterRecipes;
