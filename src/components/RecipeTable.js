import React, { Component } from 'react'
import RecipeRow from './RecipeRow'

class RecipeTable extends Component {
  render(){
    var cuisineFilteredList = [];
    var costCuisineFilteredList = [];
    var timeCostCuisineFilteredList = [];
    // console.log("xxx cuisineFilterText: " + this.props.cuisineFilterText);

    if(this.props.cuisineFilterText !== "") {
      this.props.recipes.forEach((recipe) =>{
        // console.log("cuisine filter: " + this.props.cuisineFilterText);
        // console.log("recipe cuisines: " + recipe.cuisines);
        if(recipe.cuisines.includes(this.props.cuisineFilterText)){
          cuisineFilteredList.push(recipe);
        }
      }); //forEach
    } else {
      cuisineFilteredList = this.props.recipes;
    }

    if(this.props.costFilterText !== "0") {
      cuisineFilteredList.forEach((recipe) =>{
        if(recipe.price_serving <= Number(this.props.costFilterText)){
          costCuisineFilteredList.push(recipe);
        }
      }); //forEach
    } else {
      costCuisineFilteredList = cuisineFilteredList;
    }

    if (this.props.timeFilterText !== "0") {
        costCuisineFilteredList.forEach((recipe) =>{
          if(recipe.ready_time <= Number(this.props.timeFilterText)){
            timeCostCuisineFilteredList.push(recipe);
          }
        }); //forEach
    } else {
      timeCostCuisineFilteredList = costCuisineFilteredList;
    }

    return (
      <div>
          {timeCostCuisineFilteredList.map((recipe,i)=>
            <RecipeRow key={i} {...recipe}/>
          )}
      </div>
    );
  }

}

export default RecipeTable;
