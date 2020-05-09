import React from 'react';
import {Router} from '@reach/router';
import Header from './components/elements/Header';
import Main from './components/Main';
import Movie from './components/elements/Movie';
import NotFound from './components/NotFound';

const App = () => {
 return (
  <>
   <Header />

   <Router>
    <Main path='/' />
    <Movie path='/:movieId' />
    <NotFound default />
   </Router>
  </>
 );
};

export default App;
