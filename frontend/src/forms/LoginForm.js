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
      <div className="card-body">
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input 
            name="username"
            value={this.state.username}
            placeholder="Username"
            onChange={this.handleChange}
            className="form-control"
            type="text" />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
            className="form-control" />
          <button className="btn btn-primary mt-2" type="submit">Submit</button>
        </form>
   
      </div>
    );
  }
}

export default LoginForm;