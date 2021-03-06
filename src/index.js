import React from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './utils/global';
import theme from './utils/theme';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
 <ThemeProvider theme={theme}>
  <App />
  <GlobalStyles />
 </ThemeProvider>,
 document.getElementById('root')
);
