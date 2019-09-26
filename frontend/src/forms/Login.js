import React, { Component } from "react";
import JoblyApi from '../JoblyApi';
import "./Login.css";
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

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

  async handleSignIn(evt) {
    let response = await JoblyApi.login(evt);
    localStorage.setItem('_token', response.token);
    this.props.toggleLog();
    this.props.history.push('/')
  }
  async handleRegister(evt) {
    let response = await JoblyApi.register(evt);
    localStorage.setItem('_token', response.token);
    this.props.toggleLog();
    this.props.history.push('/')
  }
  signUpChange() {
    this.setState({ signOrReg: true })
  }
  registerChange() {
    this.setState({ signOrReg: false })
  }


  render() {
    let form = this.state.signOrReg ? <LoginForm signIn={this.handleSignIn} /> : <RegisterForm register={this.handleRegister} />
    return (
      <div>
        <button className="btn btn-primary" onClick={this.signUpChange}>Sign In</button>
        <button className="btn btn-primary" onClick={this.registerChange}>Register</button>
        { form }
      </div>
    );
  }
}

export default Login;