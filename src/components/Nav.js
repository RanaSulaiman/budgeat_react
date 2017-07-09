// import React, { Component } from 'react';
// import { Router, Route, Switch, IndexRoute, Link, browserHistory } from 'react-router-dom';

// import { Link } from 'react-router-link'
// import {Home} from './Home'

// const Home = () => (
//   <div>
//     <h1>Welcome to the Tornadoes Website!</h1>
//   </div>
// )
//
// function Nav () {
//   return (
//     <Router>
//       <Switch>
//
//         <Route exact path='/' component={Home}/>
//       </Switch>
//     </Router>
//   )
//
// }
//
// export default Nav;


// var React = require('react');
// var NavLink = require('react-router-dom').NavLink;

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
