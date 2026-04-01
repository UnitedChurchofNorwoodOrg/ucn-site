import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

if (!window.location.hash) {
  window.location.replace(window.location.pathname + '#/');
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);