
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import FilterRecipes from './FilterRecipes'
// import home from '../images/home.png';

// console.log(home);

export const Nav = () => (
  <div className='container'>
  <ul className='row'>
    <li className='col-sm-2'>
      <Link activeClassName='active' to='/'>
      Home</Link>
      <img className='home' height='50'  src={'home'} alt='home'/>

    </li>
    <li className='col-sm-2'>
      <Link activeClassName='active' to='/Contact'>Contact</Link>
    </li>
    <li className='col-sm-2'>
      <Link activeClassName='active' to='/FilterRecipes'>Select Recipes</Link>
    </li>
  </ul>
</div>
)

export default Nav;
