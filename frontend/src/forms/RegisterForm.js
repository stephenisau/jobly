import React, { Component } from "react";

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: ""
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
    this.props.register(this.state);
  }
  render() {
    return (
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
      <div className="form-group">
        <label>First name</label>
        <input type="first_name" 
              name="first_name" 
              value={this.state.first_name} 
              placeholder="first_name" 
              onChange={this.handleChange} 
              className="form-control"/>
      </div>   
      <div className="form_group">
        <label>Last name</label>
        <input type="last_name" 
              name="last_name" 
              value={this.state.last_name} 
              placeholder="last_name" 
              onChange={this.handleChange} 
              className="form-control"/>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" 
              name="email" 
              value={this.state.email} 
              placeholder="email" 
              onChange={this.handleChange} 
              className="form-control"/>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
    );
  }
}

export default RegisterForm;