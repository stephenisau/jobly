import React from "react";

class JobCard extends React.PureComponent {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleApply(this.props.job);
  }

  render() {
    console.log(this.props);
    const { job } = this.props;
    return (
      <div className="Card card mt-3">
        <div className="card-body">
          <h6>{job.title}</h6>
          <p>Salary: {job.salary}</p>
          <p>Equity: {job.equity}</p>
        </div>
        {this.props.checkApplied(this.props.job.id) ? 
              <button type="button" className="btn btn-danger" onClick={this.handleClick} disabled>Applied</button> 
              : <button className="btn btn-danger selected" onClick={this.handleClick}>Apply</button>}
      </div>
    );
  };
}


export default JobCard;