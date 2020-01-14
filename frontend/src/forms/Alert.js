import React, { Component } from "react";

/*
  Display component responsible for error message handling
*/

class Alert extends Component {
  render() {
    const { color, message } = this.props;
    return (
      <div className={`alert alert-${color}`} role="alert">
        {message}
      </div>
    );
  }
}

export default Alert;