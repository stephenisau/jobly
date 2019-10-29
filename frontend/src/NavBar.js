import React from "react";
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.PureComponent {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  async logOut() {
    await this.props.removeUser();
    this.props.history.push('/');
  }

  loggedIn() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to='/companies'>
            Companies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to='/jobs'>
            Jobs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to='/profile'>
            Profile
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to='/logout'>
            Logout
          </NavLink>
        </li>
      </ul>
    )
  }

  loggedOut() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to='/login'>
            Login
          </NavLink>
        </li>
      </ul>
    )
  }

  render() {
    console.log("NAVBAR: ", this);
    let loggedIn = localStorage.getItem('_token') ? true : false;
    return (
      <nav className="navbar navbar-expand-md">
        <div className="d-flex flex-row">
          <NavLink className="navbar-brand mr-4" exact to='/'>Jobly</NavLink>
          {loggedIn ?
            (<ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to='/companies'>
                  Companies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mr-4" exact to='/jobs'>
                  Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to='/profile'>
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to='/logout' onClick={this.logOut}>
                  Logout
                </NavLink>
              </li>
            </ul>) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4">
                  <NavLink className="nav-link" exact to='/login'>
                    Login
                  </NavLink>
                </li>
              </ul>)}
        </div>
      </nav>
    );
  }
}


export default NavBar;