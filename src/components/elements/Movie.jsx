import React from 'react';
import Grid from './Grid';

import {useMovieFetch} from '../hooks/useMovieFetch';
import Spinner from './Spinner';
import MovieInfoBar from './MovieInfoBar';
import MovieInfo from './MovieInfo';
import Navigation from './Navigation';
import Actor from './Actor';

const Movie = ({movieId}) => {
 const [movie, loading, error] = useMovieFetch(movieId);
 if (error) return <div>Smth went wrong..</div>;
 if (loading || !movie.original_title) return <Spinner />;

 return (
  <>
   <Navigation movie={movie.original_title} />
   <MovieInfo movie={movie} />
   <MovieInfoBar
    time={movie.runtime}
    budget={movie.budget}
    revenue={movie.rvenue}
   />
   <Grid header='Actors'>
    {movie.actors.map((actor) => (
     <Actor key={actor.credit_id} actor={actor} />
    ))}
   </Grid>
  </>
 );
};

export default Movie;
