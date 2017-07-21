// Function: Returns single recipe- title and image in main page (search for recipes)
// Gets called by: RecipeTable
// Calls: None

import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export const RecipeRow = (recipe) => (
  <div>
    <p><img src= {recipe.image} className = "image"/></p>
    <p id='title'><Link to={'Recipe/' + recipe.recipe_id}>{recipe.title}</Link></p>
  </div>
)

export default RecipeRow
