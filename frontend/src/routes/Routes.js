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
        <Route exact path='/companies/:handle'
          render={rtProps => <CompanyProfile {...rtProps} />} />
        <Route exact path='/companies'
          render={() => <CompanyDisplay />}/>
        <Route exact path='/login'
          render={() => <Login />} />
        <Route exact path='/jobs'
          render={() => <JobDisplay />}/>
        <Route exact path='/profile'
          render={() => <Profile />}/>
          <Route exact path='/logout'
            render={() => {
              localStorage.clear();
              console.log("cleared!")
              return <Redirect to='/' />
              }} />
        <Route exact path='/'
          render={() => <Base logStatus={this.props.logStatus}/>}/>
        <Redirect to='/' />
      </Switch>
    );
  }
}

export default Routes;