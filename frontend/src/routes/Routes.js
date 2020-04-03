import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import CompanyDisplay from '../components/CompanyDisplay';
import CompanyProfile from '../components/CompanyProfile'
import Profile from '../components/Profile';
import Home from '../components/Home/';
import Login from '../components/Login/';
import PrivateRoute from './PrivateRoute';
import RegisterForm from "../components/Forms/RegisterForm";
import JobDisplay from "../components/JobDisplay";

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