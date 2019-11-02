import React from "react";
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import UserContext from './UserContext';
import { withRouter } from "react-router";


const ACTIVE_STYLES = {
  fontWeight: "bold"
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
          <NavLink className="navbar-brand mr-4" activeStyle={ ACTIVE_STYLES} exact to='/'>Jobly</NavLink>
          {loggedIn ?
            (<ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" activeStyle={ ACTIVE_STYLES} exact to='/companies'>
                  Companies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mr-4" activeStyle={ ACTIVE_STYLES} exact to='/jobs'>
                  Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeStyle={ ACTIVE_STYLES} exact to='/profile'>
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to='/logout' activeStyle={ ACTIVE_STYLES} onClick={this.logout}>
                  Logout
                </NavLink>
              </li>
            </ul>) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4">
                  <NavLink className="nav-link" exact to='/login' activeStyle={ ACTIVE_STYLES}>
                    Login
                  </NavLink>
                </li>
              </ul>)}
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);