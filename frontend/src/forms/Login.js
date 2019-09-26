import React, { Component } from "react";
import JoblyApi from '../JoblyApi';
import "./Login.css";

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
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card-container">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input name="username" 
                        value={this.state.username} 
                        placeholder="Username" 
                        onChange={this.handleChange} 
                        className="form-control" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" 
                        name="password" 
                        value={this.state.password} 
                        placeholder="Password" 
                        onChange={this.handleChange} 
                        className="form-control"/>
                </div>
                <button className="btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;