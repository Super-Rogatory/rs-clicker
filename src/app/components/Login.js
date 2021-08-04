import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { logIn } from "../effects/thunk";
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:  '',
            password: '',
            loggedIn: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const { username, password } = this.state;
        const loginInformation = { username, password };
        axios.post('http://localhost:8080/api/users/login', loginInformation, { headers: { 'Content-type': 'application/json' }})
        .then((res) => {
            alert(res.data.msg);
            this.setLocalStorage(res.data);
            // this.props.logIn();
        })
        .catch((err) => {
            console.log(err);
        })
        
    }
    setLocalStorage(responseObject) {
        localStorage.setItem('token', responseObject.token);
        localStorage.setItem('expires', responseObject.expiresIn);
    }
    render() {
        // isAuth is a slice of the store, check out reducers, thunk creators, etc to see how it is manipulated.
        // We want to dispatch an action so we can change isAuth. if isAuth is true we want to return App
        const { isAuth } = this.props;
        console.log(isAuth);
        // if(isAuth) return <Redirect to='/' />;

        const { handleChange, handleSubmit } = this;
        const { username, password } = this.state;
        return (
            <div className="ui basic segment">
                <div className="ui centered medium header">Login</div>
                <div className="ui container">
                    <form className="ui form" onSubmit={handleSubmit} >
                        <div className="field">
                            <label>Username</label>
                            <input type="text" name="username" placeholder="Username" value={username} onChange={handleChange} required />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="password" value={password} onChange={handleChange} required />
                        </div>

                    <button className="ui button" type="submit">Submit</button>
                    </form>
                </div>
                <Link to='/register'>
                    <button className="ui right floated labeled icon button">
                        <i className="chevron right icon"></i>
                        Register
                    </button>
                </Link>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.isAuth
})
const mapDispatchToProps = (dispatch) => ({
    logIn: () => dispatch(logIn())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);