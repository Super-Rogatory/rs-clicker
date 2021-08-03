import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import '../styles/App.css';
import Error from "./Error";

class MainPage extends Component {
  render() {
    return (
      <div className="main-color-or-background-image">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default MainPage;