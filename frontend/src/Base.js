import React, { Component } from "react";
import CurrentUserContext from './CurrentUserContext';

class Base extends Component {
  render() {
    const { currentUser } = this.context;
    let message = currentUser.username ? <div> Welcome back!</div> : <form action="/login"><button className="btn btn-primary">Login</button></form>
    return (
    <div>Base
      { message }
    </div>
    );
  }
}

Base.contextType = CurrentUserContext;

export default Base;