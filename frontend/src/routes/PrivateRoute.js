import React, { Component } from "react";
import { Redirect, Route } from 'react-router-dom';
import CurrentUserContext from '../CurrentUserContext';

class PrivateRoute extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }


  async logout() {
    localStorage.clear();
    await this.context.removeUser();
  };



  render() {
    const { currentUser } = this.context;
    const { exact, path, render } = this.props;
    if (this.props.logout) {
      this.logout();
    }
    const privateRoute = currentUser.username === undefined ?
      <Redirect to='/' /> :
      <Route exact={exact} path={path} render={render} currentUser={currentUser} />
    return (
      <div>
        {privateRoute}
      </div>
    );
  }
}

PrivateRoute.contextType = CurrentUserContext;

export default PrivateRoute;