/* eslint-disable no-unused-vars */
/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MoviesList from './MoviesList'
import MovieDetail from './MovieDetail'

const App = () => (
  <Router>
    <div className='App'>
      <header className='App-header'>
        {/* links to the home route */ }
        <Link to="/">
          <h1>Movie App in React</h1>
        </Link>
      </header>
      {/* A switch is a if statment that chooses routes */ }
      <Switch>
        {/* you can use the "exact" prop so you don't have to worry about order */ }
        <Route exact path="/" component={ MoviesList } />
        <Route path="/:id" component={ MovieDetail } />
      </Switch>
    </div>
  </Router>
)

export default App;
