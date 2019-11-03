import React from "react";
import JobCard from "./JobCard"

class JobList extends React.PureComponent {


  render() {
    const jobList = this.props.jobs.map((job, idx) => (
        <JobCard key={idx} job={job} handleApply={this.props.handleApply} checkApplied={this.props.checkApplied}/>))  
    return (
      <React.Fragment>
        {jobList}
      </React.Fragment>
    );
  }
}

export default JobList;