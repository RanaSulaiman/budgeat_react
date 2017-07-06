import React, { Component } from 'react'

export const RecipeRow = (recipe) => (

  <tr>
    <td>{recipe.title}</td>
    <td><img src= {recipe.source_uri} className = "image"/></td>
  </tr>
)




export default RecipeRow
