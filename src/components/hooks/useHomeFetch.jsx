import {useState, useEffect} from 'react';
import axios from 'axios';
import {SEARCH_BASE_URL, POPULAR_BASE_URL} from '../../config';

export const useHomeFetch = (searchTerm) => {
 const [state, setState] = useState({movies: []});
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(false);

 //pobieranie danych, endpoint to URL
 const fetchMovies = async (endpoint) => {
  setError(false);
  setLoading(true);

  // pobieranie 2 strony
  const params = new URLSearchParams(endpoint);
  const pageParam = params.get('page');

  try {
   const data = await axios
    .get(endpoint) //
    .then((res) => {
     const result = res.data;

     //SetState
     setState((prev) => ({
      ...prev,
      movies: pageParam //jesli przekazujemy paramtr stony Z main przy
       ? [...prev.movies, ...res.data.results]
       : [...res.data.results],
      // movies: [...res.data.results],
      heroImage: prev.HeroImage || result.results[0],
      currentPage: result.page,
      totalPages: result.total_pages,
     }));
    });
  } catch (err) {
   setError(true);
  }
  setLoading(false);
 };

 // Run once on mount
 useEffect(() => {
  if (sessionStorage.homeState) {
   console.log('pierwszy');
   setState(JSON.parse(sessionStorage.homeState));
  } else {
   console.log('drugi');
   fetchMovies(POPULAR_BASE_URL);
  }
 }, []);

 useEffect(() => {
  if (!state.searchTerm) {
   sessionStorage.setItem('homeState', JSON.stringify(state));
  }
 }, [state]);
 return [{state, loading, error}, fetchMovies]; //musimy swrocic przy poniewaz to Custom HOOk
};
