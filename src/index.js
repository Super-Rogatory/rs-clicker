import React from "react";
import ReactDOM from "react-dom";
import App from "./app/components/App";
import { Provider } from "react-redux";
import store from "./app/store";
import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
