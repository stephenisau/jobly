import React, { Component } from "react";
import JoblyApi from '../JoblyApi';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState(
      { [evt.target.name]: evt.target.value }
    )
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    let response = await JoblyApi.login(this.state);
    localStorage.setItem('_token', response.token);
    console.log("stuff ", localStorage);
  }


  render() {
    return (
    <div>
      Login
      <form onSubmit={this.handleSubmit}>
      <label>Username</label>
      <input name="username" value={this.state.username} placeholder="type username here" onChange={this.handleChange}></input>

      <label>Password</label>
      <input type="password" name="password" value={this.state.password} placeholder="type username here" onChange={this.handleChange}></input>
      <button className="btn">Submit</button>
      </form>
      </div>
    );
  }
}

export default Login;