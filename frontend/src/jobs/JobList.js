import React, { Component } from "react";
import JobCard from './JobCard';

class JobList extends Component {
  render() {
    const jobList = this.props.jobs.map(job => {
      return <JobCard job={job} />
    })
    return (
    <div>
      JobList
      {jobList}
    </div>
    );
  }
}

export default JobList;