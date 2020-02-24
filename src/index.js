import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./config/store";

const app = (
  <provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </provider>
);

ReactDOM.render(app, document.getElementById("root"));
