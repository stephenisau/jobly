import React, { Component } from "react";

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.buttonSwitcher = this.buttonSwitcher.bind(this);
  }

  buttonSwitcher() {
    this.props.currentUser.jobs.map(j => {
      if (j.id === this.props.job.id) {
        return <button className="btn btn-warning">Applied</button>
      }
      return <button className="btn btn-danger">Apply</button>
    });
  }

  render() {
    const { currentUser, job } = this.props;
    const button = currentUser === undefined ? 
        <button className="btn btn-danger">Apply</button> :
        this.buttonSwitcher();

    return (
      <div className="Card card mt-3">
        <div className="card-body">
          <h6>{this.props.job.title}</h6>
          <p>Salary: {this.props.job.salary}</p>
          <p>Equity: {this.props.job.equity}</p>
        </div>
        {button}
      </div>
    );
  }
}

export default JobCard;