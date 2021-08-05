import React, { Component } from "react";
import NavBar from "./NavBar";
import Error from './Error';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import { connect } from 'react-redux';
import Home from './Home';
class AuthenticateUser extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: false
    }
    this.checkStatus = this.checkStatus.bind(this);
  }
  checkStatus() {
    if(this.props.isAuth) this.setState({ isLoggedIn: true });
    return this.state.isLoggedIn;
  }
  render() {
    const { checkStatus } = this;
    return (
      <Router>
        <NavBar />
        <Switch>
            <Route exact path='/'>
              { checkStatus ? <Home /> : <Register /> }
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
