import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { GlobalStyle } from './styles/global';

// Componente funcional usa função
// Componente de classe usa classeå
ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,

  document.getElementById('root')
);
