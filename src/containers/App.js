import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Foundation from 'react-foundation'
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Route,
  Link,
	Switch,
  Redirect
} from 'react-router-dom'
import {browserHistory} from 'react-router'

import Nav from '../components/Nav'
import Home from '../components/Home'
import Contact from '../components/Contact'
import FilterRecipes from '../components/FilterRecipes'
import RecipeInfo from '../components/RecipeInfo'

import RailsApi from '../utils/RailsApi'


class App extends Component {
	render() {
		return (
			// <div>
				<Router>
          <div>
						 <div /*className='container'*/>
              <div /*className='row'*/ >
                <header className='header'>
                  <Nav className={"navbar","navbar-light", "bg-faded"}/>
                </header>
              </div>
            </div>


							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/Contact' component={Contact} />
								<Route exact path='/FilterRecipes' component={FilterRecipes} />
                <Route exact path='/Recipe/:recipe_id' component={RecipeInfo} />
							</Switch>

              <footer className='footer'>Footer</footer>
						</div>
					</Router>
			/* </div> */
		);
	}

}

export default App;
