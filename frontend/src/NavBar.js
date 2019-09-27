import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import CurrentUserContext from "./CurrentUserContext";

class NavBar extends Component {
  render() {
    const navLinks =
      this.context.currentUser.username !== undefined ?
        <div>
          <NavLink exact to='/companies'>Companies</NavLink>
          <NavLink exact to='/jobs'>Jobs</NavLink>
          <NavLink exact to='/profile'>Profile</NavLink>
          <NavLink exact to='/logout'>Logout</NavLink>
        </div>
        :
        <div>
          <NavLink exact to='/login'>Login</NavLink>
        </div>

    return (
      <div>
        <nav className="navbar">
          <NavLink exact to='/'>Jobly</NavLink>
          {navLinks}
        </nav>
      </div>
    );
  }
}

NavBar.contextType = CurrentUserContext

export default NavBar;