import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
// import {Home} from './Home'

var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;

const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
)

function Nav () {
  return (
    <Router>
      <Switch>

        <Route exact path='/' component={Home}/>
      </Switch>
    </Router>
  )

}

export default Nav;
