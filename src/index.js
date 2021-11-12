import React from 'react';
import ReactDOM from 'react-dom';
import { Devtools } from '@ui-devtools/tailwind';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Devtools>
      <App />
    </Devtools>
  </React.StrictMode>,
  document.getElementById('root')
);
