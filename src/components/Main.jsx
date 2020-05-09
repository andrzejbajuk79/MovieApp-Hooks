import React, {useState, Fragment} from 'react';

//custom hook
import {useHomeFetch} from './hooks/useHomeFetch';
//compnents
import HeroImage from './elements/HeroImage ';
import SearchBar from './elements/SearchBar ';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import Spinner from './elements/Spinner';
import NoImage from './images/no_image.jpg';
import {
 SEARCH_BASE_URL,
 POPULAR_BASE_URL,
 IMAGE_BASE_URL,
 BACKDROP_SIZE,
 POSTER_SIZE,
 API_URL,
 API_KEY,
} from '../config';
import LoadMoreBtn from './elements/LoadMoreBtn';

const Main = () => {
 const [searchTerm, setSearchTerm] = useState('');
 const [{state, loading, error}, fetchMovies] = useHomeFetch(searchTerm);

 const {heroImage, poster_path, movies} = state;

 if (error) return 'Smth went wrong....';
 if (!state.movies[0]) return <Spinner />;

 //SEARCH do parametr event.target.value
 const searchMovies = (search) => {
  // const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

  const endpoint = `${API_URL}${search && 'search/'}movie${
   search ? '' : '/popular'
  }?api_key=${API_KEY}&query=${search}`;

  setSearchTerm(search); //Set State wartosc z inputa

  fetchMovies(endpoint);
 };

 //Klik LOAD MORE
 const loadMoreMovies = () => {
  const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${
   state.currentPage + 1
  }`;
  const popularEndpoint = `${POPULAR_BASE_URL}&page=${state.currentPage + 1}`;
  const endpoint = searchTerm ? searchEndpoint : popularEndpoint;
  fetchMovies(endpoint);

  // const endpoint = `${API_URL}
  // ${state.searchTerm ? 'search/' : ''}
  // movie${state.searchTerm ? '' : '/popular'}
  // ?api_key=${API_KEY}
  // &query=${state.searchTerm || ''}
  // &page=${state.currentPage + 1}`;
 };

 return (
  <Fragment>
   {heroImage && !searchTerm ? (
    <HeroImage
     image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
     title={heroImage.original_title}
     text={heroImage.overview}
    />
   ) : null}

   <SearchBar callback={searchMovies} />
   <Grid header={searchTerm ? 'search Result' : 'Popular Movies'}>
    {movies.map((movie, index) => (
     <MovieThumb
      key={index}
      clickable
      image={
       movie.poster_path
        ? // ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
          IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
        : NoImage
      }
      movieId={movie.id}
      movieName={movie.original_title}
     />
    ))}
   </Grid>

   {loading && <Spinner />}
   {state.currentPage <= state.totalPages && !loading && (
    <LoadMoreBtn text='Load More' onClick={loadMoreMovies} />
   )}
  </Fragment>
 );
};

export default Main;
