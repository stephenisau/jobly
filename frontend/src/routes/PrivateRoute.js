import React, { Component } from "react";
import { Redirect, Route } from 'react-router-dom';
import UserContext from '../UserContext';

class PrivateRoute extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.context;
    const { exact, path, render } = this.props;
    const privateRoute = currentUser ?
      <Redirect to='/' /> :
      <Route exact={exact} path={path} render={render} currentUser={currentUser} />
    return (
      <div>
        {privateRoute}
      </div>
    );
  }
}

PrivateRoute.contextType = UserContext;

export default PrivateRoute;