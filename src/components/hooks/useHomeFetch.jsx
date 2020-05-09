import {useState, useEffect} from 'react';
import axios from 'axios';
import {SEARCH_BASE_URL, POPULAR_BASE_URL} from '../../config';

export const useHomeFetch = () => {
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
  const searchParam = params.get('query');

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

 //odpalamy metode to pobierania danych
 useEffect(() => {
  fetchMovies(POPULAR_BASE_URL);
 }, []);
 return [{state, loading, error}, fetchMovies]; //musimy swrocic przy poniewaz to Custom HOOk
};
