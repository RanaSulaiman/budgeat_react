import React, { Component } from 'react'
import RecipeRow from './RecipeRow'

class RecipeTable extends Component {
  render(){
    return (
      <div>
          {this.props.recipes.map((recipe,i)=>
            <RecipeRow key={i} {...recipe}/>
          )}
      </div>
      // </table>
    );
  }

}

export default RecipeTable;
