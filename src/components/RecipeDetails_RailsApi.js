import React, { Component } from 'react'
import axios from 'axios'

import RailsApi from '../utils/RailsApi'
// import dotEnv from "dotenv";
// dotEnv.config();
// var dotenv = require('dotenv');
require('dotenv').config()

console.log('GGGGGGGGG')

console.log(process.env.MASHAPE_KEY)

class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
      mashapeKey: process.env.MASHAPE_KEY,

      baseUrl: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/',

      apiParams:
        {
          'includeNutrition': true
        },
      apiHeaders: {
        'X-Mashape-Key': process.env.MASHAPE_KEY,
        'Accept': 'application/json'
        }
    }
  }

  componentDidMount(){
    axios.get(this.state.baseUrl + this.props.match.params.recipe_id + '/information',
    {
       params: this.state.apiParams,
       headers: this.state.apiHeaders
     })
      .then((response)=>{
        const table = response.data;
          this.setState({ table });
          console.log('getRecipeDetailsById: Successful API call');
          console.log(this.state.table);
        })
        .catch((error)=>{
          console.log('getRecipeDetailsById: Failed API call');
          console.log(error);
        })

  }

  render() {
    let recipe_id = this.props.match.params.recipe_id;

    return(
        <div>
          <h1>Detail for recipe # {recipe_id}</h1>
          <h1>{this.state.table.title}</h1>
          <h1>{this.state.table.sourceName}</h1>
          {/* <h1>{this.state.table.cuisines[0]}</h1> */}
        </div>
    );
  }
}

export default RecipeDetails
