import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
            <NavLink exact to='/'>Jobly</NavLink>
            <NavLink exact to='/login'>Login</NavLink>
            <NavLink exact to='/logout'>Logout</NavLink>
            <NavLink exact to='/companies'>Companies</NavLink>
            <NavLink exact to='/jobs'>Jobs</NavLink>
            <NavLink exact to='/profile'>Profile</NavLink>
        </nav>
      </div>
    );
  }
}

export default NavBar;