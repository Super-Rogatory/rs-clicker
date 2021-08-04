import React, { Component } from "react";
import NavBar from "./NavBar";
import Error from './Error';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import { connect } from 'react-redux';
import App from './App';
class AuthenticateUser extends Component {
  render() {
    const { isAuth } = this.props;
    return (
      <Router>
        <NavBar />
        <Switch>
            <Route exact path='/'>
              { isAuth ? <App /> : <Register /> }
            </Route>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.isAuth
})
export default connect(mapStateToProps, null)(AuthenticateUser);
