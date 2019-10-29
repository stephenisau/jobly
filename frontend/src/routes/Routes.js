import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import CompanyDisplay from '../companies/CompanyDisplay';
import CompanyProfile from '../companies/CompanyProfile'
import JobDisplay from '../jobs/JobDisplay';
import Profile from '../users/Profile';
import Home from '../Home';
import Login from '../forms/Login';
import PrivateRoute from './PrivateRoute';

class Routes extends Component {
  render() {
    console.log("props in job display: ", this.props);
    return (
      <Switch>
        <Route
          exact 
          path="/"
          render={() => <Home />} />

        <Route exact path='/login'
          render={rtProps => (
            <Login {...rtProps}
                   addUser={this.props.addUser} />)} />
        <PrivateRoute exact path='/logout'
          logout={true}
          currentUser={this.props.currentUser}
          removeUser={this.props.removeUser} />
        <PrivateRoute 
          exact
          path='/companies/:handle'
          currentUser={this.props.currentUser}
          render={() => <CompanyProfile currentUser={this.props.currentUser} />} /> 
          
        <PrivateRoute 
          exact 
          path='/companies'
          currentUser={this.props.currentUser}
          render={routeProps => <CompanyDisplay {...routeProps} />} />
        <PrivateRoute 
          exact 
          path='/jobs'
          currentUser={this.props.currentUser}
          render={routeProps => <JobDisplay {...routeProps} 
                                  currentUser={this.props.currentUser}
                                  addJob={this.props.addJob}/>} />
        <PrivateRoute 
          exact 
          path='/profile'
          currentUser={this.props.currentUser}
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