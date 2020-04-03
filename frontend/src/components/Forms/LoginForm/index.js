import React, { Component } from "react";
import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(evt) {
    evt.preventDefault();
    let username = "patrickstar";
    let password = "password";
    this.setState({
      username,
      password
    });
    setTimeout(() => {
      this.props.signIn(this.state);
    }, 3000);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    this.props.signIn(this.state);
  }
  
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                name="username"
                value={this.state.username}
                placeholder="Username"
                onChange={this.handleChange}
                className="form-control"
                type="text" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleChange}
                className="form-control" />
            </div>
            <button className="btn btn-primary mt-2" type="submit">Submit</button>
            <button className="btn btn-info mt-2 ml-2" type="button" onClick={this.demoLogin}> Demo </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;