import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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
import FilterRecipes from '../components/FilterRecipes'
import RecipeInfo from '../components/RecipeInfo'
import Footer from '..//components/Footer'

import RailsApi from '../utils/RailsApi'

class App extends Component {
	render() {
		return (
				<Router>
          <div >
						 <div>
                <header className='floating-header'>
                  <Nav/>
                </header>
              </div>{/*row*/}

              <p id="for-fixed-header"></p>

							<Switch className='row'>
								<Route exact path='/' component={Home} />
								<Route exact path='/FilterRecipes' component={FilterRecipes} />
                <Route exact path='/Recipe/:recipe_id' component={RecipeInfo} />
							</Switch>

              <Footer className='row'/>
            </div>{/*container*/}
					</Router>
		);
	}

}

export default App;
