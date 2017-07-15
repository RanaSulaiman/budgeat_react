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
import RecipeDetails from '../components/RecipeDetails'
import RecipeInfo from '../components/RecipeInfo'



import RailsApi from '../utils/RailsApi'


class App extends Component {
	render() {
		return (
			<div>
				<Router>
						<div className='container'>
              <div className='header'>
                {/* <img className='money' height='50' src={'../images/to/money.png'} />

                <img className='bowl' height='50' src={'../images/to/bowl.png'} /> */}
                <Nav />
              </div>

							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/Contact' component={Contact} />
								<Route exact path='/FilterRecipes' component={FilterRecipes} />
                <Route exact path='/Recipe/:recipe_id' component={RecipeInfo} />

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
