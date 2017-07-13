import React, { Component } from 'react'
import axios from 'axios'

class RecipeInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
    }
  }

  componentDidMount(){
    let recipe_id = this.props.match.params.recipe_id;

    axios.get('http://localhost:4000/recipes/' + recipe_id)
      .then((response)=>{
        const recipe = response.data;
          this.setState({ recipe });
          console.log('getRecipeInfoById: Successful API call');
          console.log(this.state.table);
        })
        .catch((error)=>{
          console.log('getRecipeInfoById: Failed API call');
          console.log(error);
        })

  }

  render() {
    let recipe_id = this.props.match.params.recipe_id;

    return(
        <div>
          <h1>Detail for recipe # {recipe_id}</h1>
          <h1>{this.state.recipe.title}</h1>
          <h1>{this.state.recipe.sourceName}</h1>
          <p><img src= {this.state.recipe.image} className = "image"/></p>
          <p>{this.state.recipe.instructions}</p>


          {/* <h1>{this.state.table.cuisines[0]}</h1> */}
        </div>
    );
  }
}
export default RecipeInfo
