import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Base extends Component {
  render() {
    let message = this.props.logStatus ? <div> Welcome back!</div> : <button className="btn btn-primary"><Link to='/login'/> Log in</button>

    return (
    <div>Base
      { message }
    </div>
    );
  }
}

export default Base;