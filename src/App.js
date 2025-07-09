/* eslint-disable global-require */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import './scss/style.scss';
import LandingPage from "./components/views/LandingPage";

const App = () => (
  <Router>
    <Switch>
      <LandingPage />
    </Switch>
  </Router>
);

export default App;
