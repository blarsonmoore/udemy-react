import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./compenents/App";
import reducers from "./reducers";

const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
  <provider store={store}>
    <App />
  </provider>,
  document.querySelector("#root")
);
