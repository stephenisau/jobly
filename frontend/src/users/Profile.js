import React, { Component } from "react";
import JoblyApi from '../JoblyApi';
import Alert from '../forms/Alert';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      _submitted: false
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
    evt.preventDefault();
    let userObj = this.state
    let username = this.state._username;
    let updatedUser = await JoblyApi.updateUser(username, userObj);
    this.setState({...updatedUser, _submitted: true });
  }


  async componentDidMount() {
    let token = localStorage.getItem('_token');
    let userObj = await JoblyApi.checkToken(token);
    let { username, first_name, last_name, email } = userObj.user
    this.setState({ _username: username, first_name, last_name, email });
  }

  render() {
    const alert = this.state._submitted ? 
    <Alert color='success' message={`User updated successfully.`} /> 
      : null

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="_username">Username</label>
            <p>{this.state._username}</p>
          </div>
          <div className="form-group">
            <label htmlFor="first_name">First name</label>
            <input onChange={this.handleChange} name="first_name" value={this.state.first_name} type="text" className="form-control" id="first_name" placeholder="first_name" />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last name</label>
            <input onChange={this.handleChange} name="last_name" value={this.state.last_name} type="text" className="form-control" id="last_name" placeholder="last_name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input onChange={this.handleChange} name="email" value={this.state.email} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} name="password" value={this.state.password} type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          {alert}
          <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
      </div>
    );
  }
}

export default Profile;