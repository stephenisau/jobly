import React, { Component } from "react";

class Base extends Component {
  render() {
    let message = this.props.currentUser.username === undefined ? <div> Welcome back!</div> : <form action="/login"><button className="btn btn-primary">Login</button></form>
    console.log(message);
    return (
    <div>Base
      { message }
    </div>
    );
  }
}

export default Base;