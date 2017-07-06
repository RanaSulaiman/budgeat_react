import React, { Component } from 'react'
import RecipeRow from './RecipeRow'

class RecipeTable extends Component {
  render(){
    return (
      <table>
        <tbody>
          {this.props.recipes.map((recipe,i)=>
            <RecipeRow key={i}
              {...recipe}/>
          )}
        </tbody>
      </table>
    );
  }

}

export default RecipeTable;
