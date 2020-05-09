import React from 'react';
import PropTypes from 'prop-types';
import {Link} from '@reach/router';
import {StyledMovieThumb} from '../styledComp/StyledMovieThumb';

const MovieThumb = ({image, movieId, clickable}) => {
 return (
  <StyledMovieThumb>
   {clickable ? (
    <Link to={`/${movieId}`}>
     <img className='clickable' src={image} alt='moviethumb' />
    </Link>
   ) : (
    <img src={image} alt='moviethumb' />
   )}
  </StyledMovieThumb>
 );
};

MovieThumb.propTypes = {
 image: PropTypes.string,
 clickable: PropTypes.bool,
 movieId: PropTypes.number,
};
export default MovieThumb;
