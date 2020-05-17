/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Poster } from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { movie } = this.state;
    return (
      // passing backdrop as a prop in MovieWrapper so that the backdrop is displayed as a background img
      <MovieWrapper backdrop={ `${BACKDROP_PATH}${movie.backdrop_path}` }>
        <MovieInfo>
          {/* poster is passed in from Movie.js to take the place of img tag */ }
          <Poster src={ `${POSTER_PATH}${movie.poster_path}` } alt={ movie.title } />
          <div>
            <h1>{ movie.title }</h1>
            <h3>{ movie.release_date }</h3>
            <p>{ movie.overview }</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    )
  }
}

export default MovieDetail;
// styling for each tag
const MovieWrapper = styled.div`
  position: relative;
  padding-top: 25rem;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div{
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
