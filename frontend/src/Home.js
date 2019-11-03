import React, { Component } from "react";
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

class Home extends Component {
  static contextType = UserContext;

  render() {
    // const loggedIn = localStorage.getItem("_token") ? true : false;   
    const currentUser = this.context;
    return (
      <div className="container-fluid">
        <h1>Jobly</h1>
        <p>All the jobs!</p>
        {currentUser ?
          (<h2>Welcome Back {this.context.currentUser}</h2>) :
          (<Link to="/login">Log In</Link>)}
      </div>
    );
  }
}

export default Home;