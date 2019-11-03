import React, { Component } from "react";
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends Component {

  render() {
    const { exact, path, render, currentUser } = this.props;
    if (!currentUser) return  <Redirect to='/' />
    return (
      <Route exact={exact} path={path} currentUser={currentUser} render={render}/>
    );
  }
}

export default PrivateRoute;