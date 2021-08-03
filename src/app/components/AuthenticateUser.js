import React, { Component } from "react";
import NavBar from "./NavBar";
import Error from './Error';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        const { username, password }= this.state;
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
        if(redirectToLogin) this.props.history.push('/login');
        return (
            <div className="ui basic segment">
                <div className="ui container">
                    <form className="ui form" onSubmit={handleSubmit} >
                        <div className="field">
                            <label>Username</label>
                            <input type="text" name="username" placeholder="Username" value={username} onChange={handleChange} />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="password" value={password} onChange={handleChange} />
                        </div>

                    <button className="ui button" type="submit">Submit</button>
                    </form>
                </div>
                <button className="ui right floated labeled icon button">
                    <i className="sign-in icon"></i>
                    Sign In
                </button>            
            </div>
        );
    }
}

class Login extends Component {
    render(){
        return <h1>Hi</h1>;
    }
}

class AuthenticateUser extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
            <Route path='/' exact component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}
export default AuthenticateUser;
