import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const navLinks =
      localStorage.getItem('username') ?
        <div>
          <NavLink exact to='/companies'>Companies</NavLink>
          <NavLink exact to='/jobs'>Jobs</NavLink>
          <NavLink exact to='/profile'>Profile</NavLink>
          <NavLink exact to='/logout'>Logout</NavLink>
        </div> : 
        <div><NavLink exact to='/login'>Login</NavLink></div>

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

export default NavBar;