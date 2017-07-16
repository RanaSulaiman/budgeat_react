
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import FilterRecipes from './FilterRecipes'
import Search from 'react-icons/lib/fa/search'
// app.use(express.static(path.join(__dirname, 'src')))

// import home from '../images/home.png';

// export default {
//   home
// }

// console.log(home);

export const Nav = () => (

  <div className='container'>
  <ul className='nav'>
    <div className='row'>
      <p className='col-sm-6'>logo</p>
    <li className='col-sm-2'>
      <Link activeClassName='active' to='/'>
      Home</Link>
      <img className="img-responsive" height='500'  src={"../images/home.png"} alt="home"/>
    </li>

    <li className='col-sm-2'>
      <Link activeClassName='active' to='/Contact'>Contact</Link>
    </li>

    <li className='col-sm-2'>
      <Link activeClassName='active' to='/FilterRecipes'>Select Recipes</Link>
    </li>
  </div>
  </ul>
</div>
)

export default Nav;
