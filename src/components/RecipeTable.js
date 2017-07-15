import React, { Component } from 'react'
import RecipeRow from './RecipeRow'


class RecipeTable extends Component {
  render(){
    var dishtypeFilteredList = [];
    var costDishTypeFilteredList = [];
    var timeCostDishTypeFilteredList = [];
    var intoleranceTimeCostDishTypeFilteredList = [];
    // console.log("xxx dishtypeFilterText: " + this.props.dishtypeFilterText);

    if(this.props.dishtypeFilterText !== '') {
      this.props.recipes.forEach((recipe) =>{
        // console.log("cuisine filter: " + this.props.cuisineFilterText);
        // console.log("recipe cuisines: " + recipe.cuisines);
        if(recipe.dish_type.includes(this.props.dishtypeFilterText)){
          dishtypeFilteredList.push(recipe);
        }
      }); //forEach
    } else {
      dishtypeFilteredList = this.props.recipes;
    }

    if(this.props.costFilterText !== "0") {
      dishtypeFilteredList.forEach((recipe) =>{
        if(recipe.price_serving <= Number(this.props.costFilterText)){
          costDishTypeFilteredList.push(recipe);
        }
      }); //forEach
    } else {
      costDishTypeFilteredList = dishtypeFilteredList;
    }

    if (this.props.timeFilterText !== "0") {
        costDishTypeFilteredList.forEach((recipe) =>{
          if(recipe.ready_time <= Number(this.props.timeFilterText)){
            timeCostDishTypeFilteredList.push(recipe);
          }
        }); //forEach
    } else {
      timeCostDishTypeFilteredList = costDishTypeFilteredList;
    }

    if (this.props.intoleranceFilterText !== '') {
        timeCostDishTypeFilteredList.forEach((recipe) =>{
          if(recipe.diets.includes(this.props.intoleranceFilterText)){
            intoleranceTimeCostDishTypeFilteredList.push(recipe);
          }
        }); //forEach
    } else {
      intoleranceTimeCostDishTypeFilteredList = timeCostDishTypeFilteredList;
    }


    return (
      <div classNmae='container'>
      <ul className='row-fluid'>
          {intoleranceTimeCostDishTypeFilteredList.map((recipe,recipe_id)=>
            <li className='col-sm-4'>
              <RecipeRow key={recipe_id} {...recipe}/>
            </li>
          )}
      </ul>
    </div>
    );
  }

}

export default RecipeTable;
