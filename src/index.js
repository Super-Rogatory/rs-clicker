import React from "react";
import ReactDOM from "react-dom";
import App from "./app/components/App";
import { Provider } from "react-redux";
import store from "./app/store";
import { Redirect } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
