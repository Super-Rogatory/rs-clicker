import React, { Component } from "react";
import { connect } from 'react-redux';
import AuthenticateUser from "./AuthenticateUser";

class App extends Component {
  render() {
    return (    
      <div>
        <AuthenticateUser />
      </div>
    );
  }
}

export default connect(null, null)(App);

// MainPage is the component that allows us to handle specific routes such as linking to the home page or sending an error message.