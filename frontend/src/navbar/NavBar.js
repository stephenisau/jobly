import React from "react";
import { NavLink } from 'react-router-dom';
import UserContext from '../UserContext';
import { withRouter } from "react-router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

const ACTIVE_STYLES = {
  fontWeight: "bold",
  color: "#00FFFF"
}

class NavBar extends React.PureComponent {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  static contextType = UserContext;

  async logout() {
    await this.props.handleLogout();
    this.props.history.push('/');
  }


  render() {
    let loggedIn = localStorage.getItem('_token') ? true : false;
    return (
      <nav className="navbar navbar-expand-md">
        <div className="d-flex flex-row">
          <NavLink className="navbar-brand mr-4" id="nav-link" activeStyle={ACTIVE_STYLES} exact to='/'>
            <FontAwesomeIcon aria-hidden="true" icon={faUsers} id="jobly-icon" /> Jobly
          </NavLink>
        </div>
        {loggedIn ?
          (<ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" id="nav-link" activeStyle={ACTIVE_STYLES} exact to='/companies'>
                Companies
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" id="nav-link" activeStyle={ACTIVE_STYLES} exact to='/jobs'>
                Jobs
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" id="nav-link" activeStyle={ACTIVE_STYLES} exact to='/profile'>
                Profile
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" id="nav-link" exact to='/logout' activeStyle={ACTIVE_STYLES} onClick={this.logout}>
                Logout
                </NavLink>
            </li>
          </ul>) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-4">
                <NavLink className="nav-link" id="nav-link" exact to='/login' activeStyle={ACTIVE_STYLES}>
                  Login
                  </NavLink>
              </li>
            </ul>)}

      </nav>
    );
  }
}


export default withRouter(NavBar);