import React, { Component } from 'react';
import PropTypes from 'prop-types';




export default class Movie extends Component {
  // you should have a proptype for every prop in your component
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }

// you need either a isRequired or a default prop for each
/*   static defaultProps = {
    desc: 'Description not available'
  } */


  
  render() {
    return (
      <div>
        <h3>{this.props.movie.title}</h3>

      </div>
    )
  }
};