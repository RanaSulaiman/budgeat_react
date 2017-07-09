import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export const RecipeRow = (recipe) => (
  <div>
    <Link to={'Recipe/' + recipe.id}>{recipe.title}</Link>
    <p>{recipe.cuisines}</p>
    <p>[{recipe.price_serving} cent] [{recipe.ready_time} min]</p>
    <p><img src= {recipe.image} className = "image"/></p>
  </div>
)

export default RecipeRow
