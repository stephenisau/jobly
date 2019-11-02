import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import CompanyDisplay from '../companies/CompanyDisplay';
import CompanyProfile from '../companies/CompanyProfile'
import JobList from '../jobs/JobList';
import Profile from '../users/Profile';
import Home from '../Home';
import Login from '../forms/Login';
import PrivateRoute from './PrivateRoute';
import RegisterForm from "../forms/RegisterForm";

class Routes extends React.PureComponent {
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
          checkApplied={this.props.checkApplied}
          loaded={this.props.loaded}
          render={() => <CompanyProfile currentUser={this.props.currentUser} />} />

        <PrivateRoute
          exact
          path='/companies'
          currentUser={this.props.currentUser}
          loaded={this.props.loaded}
          render={routeProps => <CompanyDisplay {...routeProps} />} />


        <PrivateRoute
          exact
          path='/jobs'
          currentUser={this.props.currentUser}
          loaded={this.props.loaded}
          render={routeProps => <JobList {...routeProps}
            checkApplied={this.props.checkApplied}
            currentUser={this.props.currentUser}
            addJob={this.props.addJob} />} />

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