import React, { Component } from "react";
import CurrentUserContext from './CurrentUserContext';

class Base extends Component {
  render() {
    const { currentUser } = this.context;
    let message = currentUser.username ?
     <h1 className="text-center"> Welcome back!</h1> : 
     <div className="text-center">
     <h1>Welcome to Jobly!</h1>
     <form action="/login"><button className="btn btn-primary">Login</button></form>
     </div>
    return (
    <div className="container">
      { message }
    </div>
    );
  }
}

Base.contextType = CurrentUserContext;

export default Base;