import React from "react";

class JobCard extends React.PureComponent {
  render() {
    const { job } = this.props;
    return (
      <div className="Card card mt-3">
        <div className="card-body">
          <h6>{job.title}</h6>
          <p>Salary: {job.salary}</p>
          <p>Equity: {job.equity}</p>
        </div>
        {this.props.checkApplied(this.props.job.id) ? 
              <button className="btn applied selected" onClick={this.handleClick}>Applied</button> 
              : <button className="btn apply selected" onClick={this.handleClick}>Apply</button>}
      </div>
    );
  };
}


export default JobCard;