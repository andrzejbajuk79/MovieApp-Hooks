import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

import {API_KEY, API_URL} from '../../config';

export const useMovieFetch = (movieId) => {
 const [state, setState] = useState({});
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(false);

 const fetchData = useCallback(async () => {
  setError(false);
  setLoading(true);
  try {
   const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
   const result = await axios.get(endpoint).then((res) => res.data);
   const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
   const creditsResult = await axios
    .get(creditsEndpoint)
    .then((res) => res.data);
   const directors = creditsResult.crew.filter(
    (member) => member.job === 'Director'
   );
   setState({
    ...result,
    actors: creditsResult.cast,
    directors,
   });
  } catch (err) {
   setError(true);
  }

  setLoading(false);
 }, [movieId]);
 useEffect(() => {
  fetchData();
 }, [fetchData]);
 return [state, loading, error];
};
