import React, { Component } from "react";

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