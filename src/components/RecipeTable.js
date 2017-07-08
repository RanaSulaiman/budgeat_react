import React, { Component } from 'react'
import RecipeRow from './RecipeRow'

class RecipeTable extends Component {
  render(){
    var costFilteredList = [];
    var timeCostFilteredList = [];
    console.log("xxx " + this.props.costFilterText);

    if(this.props.costFilterText !== "0") {
      this.props.recipes.forEach((recipe) =>{
        if(recipe.price_serving <= Number(this.props.costFilterText)){
          costFilteredList.push(recipe);
        }
      }); //forEach
    } else {
      costFilteredList = this.props.recipes;
    }

    if (this.props.timeFilterText !== "0") {
        costFilteredList.forEach((recipe) =>{
          if(recipe.ready_time <= Number(this.props.timeFilterText)){
            timeCostFilteredList.push(recipe);
          }
        }); //forEach
    } else {
      timeCostFilteredList = costFilteredList;
    }

    return (
      <div>
          {timeCostFilteredList.map((recipe,i)=>
            <RecipeRow key={i} {...recipe}/>
          )}
      </div>
    );
  }

}

export default RecipeTable;
