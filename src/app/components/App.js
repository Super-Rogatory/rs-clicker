import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import MainScreen from "./MainScreen";
import Error
 from "./Error";
class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
