import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { HashRouter, Route, Switch, BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
    {/* {" "} */}
    <App />
    {/* </BrowserRouter> */}
  </Provider>,
  document.getElementById("root")
);
