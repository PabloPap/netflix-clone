// @flow

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Perf from "react-addons-perf";
import App from './App';

// window.Perf = Perf;
// Perf.start();

const renderApp = () => {
  const app = document.getElementById('app');
  if (app !== null) {
    render(<BrowserRouter><App /></BrowserRouter>, app);
  }
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
