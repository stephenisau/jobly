import React from "react";
import "./JobCard.css";

class JobCard extends React.PureComponent {

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
      <div className="Card card">
        <div className="card-body job-card">
          <h6>{job.title}</h6>
          <p>Salary: {job.salary}</p>
          <p>Equity: {job.equity}</p>
        </div>
        {job.state ?
          <button type="button" className="btn btn-danger" onClick={this.handleClick} disabled>Applied</button>
          : <button className="btn btn-danger selected" onClick={this.handleClick}>Apply</button>}
      </div>
    );
  };
}


export default JobCard;