// @flow

import React from "react";
import { render } from "react-dom";
// import Perf from "react-addons-perf";
import App from "./App";

// window.Perf = Perf;
// Perf.start();

const renderApp = () => {
  const app = document.getElementById("app");
  if (app !== null) {
    render(<App />, app);
  }
};

renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
