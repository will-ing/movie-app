/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  // passing through a movie parameter that will render the img of each movie in MoviesList.js
  <div>
    <Link to={ `/${movie.id}` }>
      <img src={ `${POSTER_PATH}${movie.poster_path}` } alt={ movie.title } />
    </Link>
  </div>
)

export default Movie;
// you should have a proptype for every prop in your component
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export const Poster = styled.img`
  box-shadow: 0 0 35px black
`