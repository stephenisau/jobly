import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import CompanyDisplay from '../companies/CompanyDisplay';
import CompanyProfile from '../companies/CompanyProfile'
import JobDisplay from '../jobs/JobDisplay';
import Profile from '../users/Profile';
import Base from '../Base';
import Login from '../forms/Login';
import PrivateRoute from './PrivateRoute';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/login'
          render={rtProps => <Login {...rtProps} addUser={this.props.addUser} />} />
        <PrivateRoute exact path='/logout' 
                      logout={true} 
                      currentUser={this.props.currentUser}
                      removeUser={this.props.removeUser}/>
        <PrivateRoute path='/companies/:handle'
                      currentUser={this.props.currentUser}
                      component={routeProps => <CompanyProfile {...routeProps} currentUser={this.props.currentUser}/>}/>}/>
        <PrivateRoute path='/companies' 
                      currentUser={this.props.currentUser}
                      component={routeProps => <CompanyDisplay {...routeProps} currentUser={this.props.currentUser}/>}/>}/>
        <PrivateRoute path='/jobs'
                      currentUser={this.props.currentUser}
                      component={routeProps => <JobDisplay {...routeProps} currentUser={this.props.currentUser}/>}/>
        <PrivateRoute path='/profile'
                      currentUser={this.props.currentUser}
                      component={routeProps => <Profile {...routeProps} currentUser={this.props.currentUser}/>}/>}/>
        <PrivateRoute currentUser={this.props.currentUser} />
        <Route exact path='/'
          render={() => <Base currentUser={this.props.currentUser} />} />
        <Redirect to='/' />
      </Switch>
    );
  }
}

export default Routes;