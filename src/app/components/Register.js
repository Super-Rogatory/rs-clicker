import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';


class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:  '',
            password: '',
            redirectToLogin: false,
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
        const registerInformation = { username, password };
        axios.post('http://localhost:8080/api/users/register', registerInformation, { headers: { 'Content-type': 'application/json' }})
        .then((res) => {
            if(!res.data.user) {
                alert('username is taken');
                throw new Error('username is taken');
            }
            alert(res.data.msg);
            this.setState({ redirectToLogin: true });
        })
        .catch((err) => {
            console.log(err);
        })
    }
    render() {
        const { handleChange, handleSubmit } = this;
        const { username, password, redirectToLogin } = this.state;
        if(redirectToLogin) return <Redirect to='/login' />;
        return (
            <div className="ui basic segment">
                <div className="ui centered medium header">Register User</div>
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
                <Link to='/login'>
                    <button type='reset' className="ui right floated labeled icon button">
                        <i className="sign-in icon"></i>
                        Sign In
                    </button>
                </Link>         
            </div>
        );
    }
}

export default Register;