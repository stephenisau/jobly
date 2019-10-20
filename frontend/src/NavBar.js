import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import CurrentUserContext from "./CurrentUserContext";

class NavBar extends Component {
  render() {
    const navLinks =
      this.context.currentUser.username !== undefined ?
        <div>
          <nav className="navbar">
            <NavLink className="nav-link" exact to='/companies'>Companies</NavLink>
            <NavLink className="nav-link" exact to='/jobs'>Jobs</NavLink>
            <NavLink className="nav-link" exact to='/profile'>Profile</NavLink>
            <NavLink className="nav-link" exact to='/logout'>Logout</NavLink>
          </nav>
        </div>
        :
        <div>
          <NavLink className="nav-link" exact to='/login'>Login</NavLink>
        </div>

    return (
      <div>
        <nav className="navbar">
          <NavLink className="navbar-brand" exact to='/'>Jobly</NavLink>
          {navLinks}
        </nav>
      </div>
    );
  }
}

NavBar.contextType = CurrentUserContext

export default NavBar;