import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import CompanyDisplay from '../Companies/CompanyDisplay';
import CompanyProfile from '../Companies/CompanyProfile'
import Profile from '../NavBar/Profile';
import Home from '../Home';
import Login from '../Forms/Login';
import PrivateRoute from './PrivateRoute';
import RegisterForm from "../Forms/RegisterForm";
import JobDisplay from "../Jobs/JobDisplay";

class Routes extends Component {
  render() {
    return (
      <Switch>

        <Route exact path='/login'
          render={rtProps => (
            <Login {...rtProps}
              addUser={this.props.addUser} />)} />

        <Route exact path="/register"
          render={rtProps => (
            <RegisterForm {...rtProps} addUser={this.props.addUser} />
          )} />

        <PrivateRoute exact path='/logout'
          loaded={this.props.loaded}
          logout={true}
          currentUser={this.props.currentUser}
          removeUser={this.props.removeUser} />

        <PrivateRoute
          exact
          path='/companies/:handle'
          currentUser={this.props.currentUser}
          render={() => <CompanyProfile
            handleApply={this.props.addJob}
            currentUser={this.props.currentUser} />} />

        <PrivateRoute
          exact
          path='/companies'
          loaded={this.props.loaded}
          currentUser={this.props.currentUser}
          render={routeProps => <CompanyDisplay {...routeProps} />} />


        <PrivateRoute
          exact
          path='/jobs'
          currentUser={this.props.currentUser}
          render={routeProps => <JobDisplay {...routeProps}
            handleApply={this.props.addJob}
            loaded={this.props.loaded}
            currentUser={this.props.currentUser} />} />

        <PrivateRoute
          exact
          path='/profile'
          currentUser={this.props.currentUser}
          loaded={this.props.loaded}
          render={routeProps => <Profile {...routeProps}
            currentUser={this.props.currentUser} />} />

        <Route exact path='/'
          render={() => <Home currentUser={this.props.currentUser} loaded={this.props.loaded} />} />
        <Redirect to='/' />

      </Switch>
    );
  }
}

export default Routes;