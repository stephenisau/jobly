import React, { Component } from "react";
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

class Home extends Component {
  static contextType = UserContext;

  render() {
    const { loaded } = this.props;

    console.log(loaded);
    return (
      <div className="container-fluid">
        <h1>Jobly</h1>
        <p>All the jobs!</p>
        {loaded ?
          (<h2>Welcome Back {this.context.currentUser}</h2>) :
          (<Link to="/login">Log In</Link>)}
      </div>
    );
  }
}

export default Home;