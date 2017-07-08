import React, { Component } from 'react';
import { Router, Route, Switch, IndexRoute, Link, browserHistory } from 'react-router-dom';

// import { Link } from ('react-router-dom').Link;

// import { Link } from 'react-router-link'
// import {Home} from './Home'

// var Link = require('react-router-dom').Link;
// var NavLink = require('react-router-dom').NavLink;
//
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


class Nav extends Component {
  render () {
    return (
      <div>
        <ul className='nav'>
          <li>
            <Link exact activeClassName='active' to='/'>Home</Link>
          </li>
        </ul>
      </div>
    );
 }
}

export default Nav;
