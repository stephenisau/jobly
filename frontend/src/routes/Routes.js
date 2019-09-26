import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import CompanyDisplay from '../companies/CompanyDisplay';
import CompanyProfile from '../companies/CompanyProfile'
import JobDisplay from '../jobs/JobDisplay';
import Profile from '../users/Profile';
import Base from '../Base';
import Login from '../forms/Login';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/companies'
          render={() => <CompanyDisplay />}/>
        <Route exact path='/companies/:handle'
          render={rtProps => <CompanyProfile {...rtProps} />} />
        <Route exact path='/jobs'
          render={() => <JobDisplay />}/>
        <Route exact path='/profile'
          render={() => <Profile />}/>
        <Route exact path='/login'
          render={rtProps => <Login {...rtProps}/>} />
          <Route exact path='/logout'
            render={() => {
              localStorage.clear();
              this.props.removeUser();
              return <Redirect to='/' />
              }} />
        <Route exact path='/'
          render={() => <Base currentUser={this.props.currentUser}/>}/>
        <Redirect to='/' />
      </Switch>
    );
  }
}

export default Routes;