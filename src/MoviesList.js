import React, { Component } from 'react';
import Movie from './Movie'

class MoviesList extends Component {
  // need a default state or you will get an error
  state = {
    movies: [],
  }


  //async says we are hitting and api and will wait for it to come back
  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8b159bce26e2bf4fe43ef9e7aff40624&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`) // api key
      const movies = await res.json(); //get movies from the response
      this.setState({
        // setting our state to the results
        movies: movies.results
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    )
  }
}

export default MoviesList;