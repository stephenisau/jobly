import React, { Component } from "react";

class JobCard extends Component {
  render() {
    return (
    <div>
      JobCard
      <pre>{JSON.stringify(this.props)}</pre>
    </div>
    );
  }
}

export default JobCard;