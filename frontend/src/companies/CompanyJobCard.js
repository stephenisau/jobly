import React, { Component } from "react";

class CompanyJobCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    this.props.apply(this.props.job)
  }

  render() {
    const { job } = this.props;
    return (
      <div className="Card card mt-3">
        <div className="card-body">
          <h6>{job.title}</h6>
          <p>Salary: {job.salary}</p>
          <p>Equity: {job.equity}</p>
        </div>
        {job.state ?
          <button type="button" className="btn btn-danger" onClick={this.handleClick} disabled>Applied</button>
          : <button className="btn btn-danger selected" onClick={this.handleClick}>Apply</button>}
      </div>
    )
  }
}

export default CompanyJobCard;