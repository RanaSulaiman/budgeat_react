import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Foundation from 'react-foundation'
import PropTypes from 'prop-types'

// import ReactRouter from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
	Switch,
  Redirect
} from 'react-router-dom'

import Nav from '../components/Nav'
import Home from '../components/Home'
import Contact from '../components/Contact'
import FilterRecipes from '../components/FilterRecipes'

import api from '../utils/api'

// var api = require('../utils/api');
// var axios = require('axios');
//
// componentDidMount() {
//     axios.get(`https://localhost/4000/recipes.json`)
//       .then(res => {
//         const posts = res.data.data.children.map(obj => obj.data);
//
//       });
//   }

// componentDidMount() {
//     api.fetchRecipeDetails()
// 			.then(function(recipe) {
// 				consloe.log(recipe);
// 		})
// }

// on mount, fetch all products and stored them as this component's state
// componentDidMount () {
//     this.serverRequest = $.get("https://localhost/4000/recipes")
//
// }

class App extends Component {
	render() {
		return (
			<div>
				<Router>
						<div className='container'>
							<Nav />

							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/Contact' component={Contact} />
								<Route exact path='/FilterRecipes' component={FilterRecipes} />
								{/* <Route render={function () {
									return <p>Not Found</p>
								}} /> */}
							</Switch>
						</div>
					</Router>
			</div>
		);
	}

}

export default App;
