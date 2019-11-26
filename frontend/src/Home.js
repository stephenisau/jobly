import React, { Component } from "react";
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import "./Home.css";

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className="container text-center card" id="homecard">
          <div className="text-container mt-4">
            <h1 className="mb-4 font-weight-bold">Jobly</h1>
            <p className="lead">All the jobs in one, convenient place.</p>
            <UserContext.Consumer>
              {currentUser => (
                <React.Fragment>
                  {currentUser
                    ? <h2>Welcome Back {currentUser.user.first_name}!</h2>
                    : <Link className="btn btn-primary mx-auto" id="home-login" to="/login">Log in</Link>
                  }
                </React.Fragment>
              )}
            </UserContext.Consumer>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;