import React, { Component } from "react";
import JoblyApi from '../../JoblyApi';
import "./Login.css";
import LoginForm from '../Forms/LoginForm'
import RegisterForm from '../Forms/RegisterForm'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: true
    }
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.signInChange = this.signInChange.bind(this)
    this.registerChange = this.registerChange.bind(this)
  }

  async handleSignIn(data) {
    let response = await JoblyApi.login(data);
    localStorage.setItem('_token', response.token);

    this.props.addUser(response.token);
    this.props.history.push('/');
  }

  async handleRegister(data) {
    try {
      let response = await JoblyApi.register(data);
      localStorage.setItem('_token', response.token);

      this.props.addUser(response.token);

      this.props.history.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  signInChange() {
    this.setState({ login: true });
  }

  registerChange() {
    this.setState({ login: false });
  }


  render() {
    return (
      <div id="Login">
        <div className="container my-4 col-md-8">
          <div className="login">
            <div className="btn-group">
              <div className="mt-4 mb-1">
                <button className={this.state.login ? "btn btn-primary mr-1 active" : "btn btn-primary mr-1"} onClick={this.signInChange}>Sign In</button>
                <button className={this.state.login ? "btn btn-primary ml-1" : "btn btn-primary ml-1 active"} onClick={this.registerChange}>Register</button>
              </div>
            </div>
            <div className="login-form" id="cardform">
              {this.state.login ?
                <LoginForm signIn={this.handleSignIn} /> :
                <RegisterForm register={this.handleRegister} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;