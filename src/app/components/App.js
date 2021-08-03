import React, { Component } from "react";
import { connect } from 'react-redux';
import MainPage from "./MainPage";
import AuthenticateUser from "./AuthenticateUser";

class App extends Component {
  render() {
    const { isAuth } = this.props;
    return (    
      <div>
        { isAuth ? <MainPage /> : <AuthenticateUser />  }
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.isAuth
})
export default connect(mapStateToProps, null)(App);

// MainPage is the component that allows us to handle specific routes such as linking to the home page or sending an error message.