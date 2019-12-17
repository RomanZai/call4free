/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pricing from "./Pricing.js";
import SignUp from "./SignUp";
import Login from "./Login";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";


class App extends Component {
  render() {
    return (
      <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Pricing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
    );
  }
}

export default App;
