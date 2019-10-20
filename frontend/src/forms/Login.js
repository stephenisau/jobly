import React, { Component } from "react";
import JoblyApi from '../JoblyApi';
import "./Login.css";
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import jwt from 'jsonwebtoken';
import CurrentUserContext from '../CurrentUserContext';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signOrReg: true
    }
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.signUpChange = this.signUpChange.bind(this)
    this.registerChange = this.registerChange.bind(this)
  }

  async handleSignIn(data) {
    let response = await JoblyApi.login(data);
    let user = jwt.decode(response.token);

    this.context.addUser(user);

    localStorage.setItem('_token', response.token);
    this.props.history.push('/');
  }

  async handleRegister(data) {
    debugger;
    let response = await JoblyApi.register(data);
    let user = jwt.decode(response.token);

    this.context.addUser(user);

    localStorage.setItem('_token', response.token);
    this.props.history.push('/');
  }

  signUpChange() {
    this.setState({ signOrReg: true });
  }

  registerChange() {
    this.setState({ signOrReg: false });
  }


  render() {
    let form = this.state.signOrReg ?
      <LoginForm signIn={this.handleSignIn} />
      : <RegisterForm register={this.handleRegister} />

    return (
      <div className="container">
        <div className="mt-4 mb-1">
          <button className={this.state.signOrReg ? "btn btn-primary mr-1 active" : "btn btn-primary mr-1"} onClick={this.signUpChange}>Sign In</button>
          <button className={this.state.signOrReg ? "btn btn-primary ml-1" : "btn btn-primary ml-1 active"} onClick={this.registerChange}>Register</button>
        </div>
        <div className="card">
          {form}
        </div>
      </div>
    );
  }
}

Login.contextType = CurrentUserContext;

export default Login;