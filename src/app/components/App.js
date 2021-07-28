import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import MainScreen from "./MainScreen";
import '../styles/App.css';
import Error
 from "./Error";
class App extends Component {
  render() {
    return (
      <div className="main-color-or-background-image">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <MainScreen />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
