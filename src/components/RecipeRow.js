import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export const RecipeRow = (recipe) => (
  <div>
    <p className='title'><Link to={'Recipe/' + recipe.recipe_id}>{recipe.title}</Link></p>
    {/* <p>{recipe.dish_type}</p>
    <p>[{recipe.price_serving} cent] [{recipe.ready_time} min]</p>
    <p>gluten free: {recipe.gluten}</p>
    <p>dairy free: {recipe.dairy}</p> */}


    <p><img src= {recipe.image} className = "image"/></p>

  </div>
)

export default RecipeRow
