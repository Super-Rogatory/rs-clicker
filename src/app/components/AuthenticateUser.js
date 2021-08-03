import React, { Component } from "react";
import NavBar from "./NavBar";
import Error from './Error';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './Register';
import Login from './Login';

class AuthenticateUser extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
            <Route path='/' exact component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}
export default AuthenticateUser;
