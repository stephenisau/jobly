import React, { Component } from "react";
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import "./Home.css";

class Home extends Component {

  render() {
    return (
      <div id="home-container">
          <div className="homepage-container">
            <div className="homepage card">
              <h1>Welcome to Jobly</h1>
              <p>A place for all your jobs!</p>
              <UserContext.Consumer>
                {currentUser => (
                  <div className="Home">
                    {currentUser
                      ? <h2>Welcome Back {currentUser.user.first_name}!</h2>
                      : <Link to="/login">Log in</Link>
                    }
                  </div>
                )}
              </UserContext.Consumer>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;