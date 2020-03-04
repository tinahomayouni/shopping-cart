import React from "react";
import MyRoutes from "./Router";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./config/store";

const Navigation = props => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart">cart</NavLink>
      </li>
    </ul>
  </nav>
);
function App() {
  return (
    <div className="page-container">
      <Provider store={store}>
        <Router>
          <Navigation />
          <MyRoutes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
