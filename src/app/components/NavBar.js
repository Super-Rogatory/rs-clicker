import React, { Component } from 'react';
import { connect } from 'react-redux';
class NavBar extends Component {
    render() {
        const { isAuth } = this.props;
        return(
            <div className="ui segment">
                <h1 className="ui center aligned header"> {isAuth ? 'RSClicker' : 'RSClicker | Authentication'} </h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.isAuth
})
export default connect(mapStateToProps, null)(NavBar);