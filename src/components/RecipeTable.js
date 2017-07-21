// Function: Returns recipes list in the main page
// Gets called by: FilterableRecipeTable
// Calls: RecipeRow


import React, { Component } from 'react'
import RecipeRow from './RecipeRow'

class RecipeTable extends Component {
  render(){

    return (
    <div className='container'>
      <ul className='row'>
        {!this.props.loading && this.props.recipes.length === 0 ? <div>no results</div> : null}
          {this.props.recipes.map((recipe)=>
            <li className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
              <RecipeRow key={recipe.recipe_id} {...recipe}/>
            </li>
          )}
      </ul>
    </div>
    );
  }

}

export default RecipeTable;
