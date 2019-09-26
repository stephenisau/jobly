import React, { Component } from "react";
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }


  async logout() {
    localStorage.clear();
    await this.props.removeUser();
  };



  render() {
    if (this.props.logout) {
      this.logout();
    }
    const privateRoute = this.props.currentUser.username === undefined ? 
    <Redirect to='/' /> :
    <Route render={this.props.component} />
    return (
      <div>
        {privateRoute}
      </div>
    );
  }
}

export default PrivateRoute;