import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const movies = [
  {
  id: 1,
  title: 'star Wars',
  desc: 'A space movie'
},
  {
  id: 2,
  title: 'Spider Man',
  desc: 'A super hero movie'
},
  {
  id: 3,
  title: 'Captain America',
  desc: 'Marvel movie'
},
  {
  id: 4,
  title: 'Iron Man',
  desc: 'About Tony Stark'
},
]


class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.desc} />)}
    </div>
    )
  }
}


export default App;
