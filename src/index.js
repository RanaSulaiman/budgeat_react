import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, IndexRoute, Link, browserHistory } from 'react-router-dom';

// Import Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from '../src/containers/App';
import Home from '../src/components/Home';

// var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

ReactDOM.render (
  // ( <Router>
  //   <Route path="/" component={Home}>
  //   </Route>
  // </Router>
  // )
  <App/>,
  document.getElementById('root')
);
registerServiceWorker();
