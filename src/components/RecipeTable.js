import React, { Component } from 'react'
import RecipeRow from './RecipeRow'

class RecipeTable extends Component {
  render(){
    var filteredList = [];
    console.log("xxx " + this.props.costFilterText);

    this.props.recipes.forEach((recipe) =>{
      if(recipe.price_serving <= Number(this.props.costFilterText)){
      filteredList.push(recipe);
      }
    });

    return (
      <div>
          {filteredList.map((recipe,i)=>
            <RecipeRow key={i} {...recipe}/>
          )}
      </div>
      // </table>
    );
  }

}

export default RecipeTable;
