import React, { Component } from "react";

class JobCard extends Component {
  render() {
    return (
    <div className="Card card mt-3">
      <div className="card-body">
        <h6>{this.props.job.title}</h6>
        <p>Salary: {this.props.job.salary}</p> 
        <p>Equity: {this.props.job.equity}</p>
      </div>
      <button className="btn btn-danger">Apply</button>
    </div>
    );
  }
}

export default JobCard;