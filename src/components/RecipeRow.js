import React, { Component } from 'react'

export const RecipeRow = (recipe) => (

  // <tr>
    // <td>{recipe.title}</td>
    // <td><img src= {recipe.image} className = "image"/></td>
  // </tr>
  <div>
    <p>{recipe.title}</p>
    <p>{recipe.cuisines}</p>
    <p>[{recipe.price_serving} cent] [{recipe.ready_time} min]</p>
    <p><img src= {recipe.image} className = "image"/></p>
  </div>
)


export default RecipeRow
