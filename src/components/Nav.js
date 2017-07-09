
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import FilterRecipes from './FilterRecipes'

export const Nav = () => (
  <ul className='nav'>
    <li>
      <Link activeClassName='active' to='/'>Home</Link>
    </li>
    <li>
      <Link activeClassName='active' to='/Contact'>Contact</Link>
    </li>
    <li>
      <Link activeClassName='active' to='/FilterRecipes'>Select Recipes</Link>
    </li>
  </ul>
)

export default Nav;
