import React, { Component } from 'react'

export const RecipeRow = (recipe) => (

  // <tr>
    // <td>{recipe.title}</td>
    // <td><img src= {recipe.image} className = "image"/></td>
  // </tr>
  <p>{recipe.title}<img src= {recipe.image} className = "image"/></p>
)


export default RecipeRow
