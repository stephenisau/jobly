import React, { Component } from "react";
import JobCard from './JobCard';

class JobList extends Component {


  render() {
    console.log(this.props);
    const { jobs, currentUser } = this.props;
    const jobList = jobs.map(job => {
      return <JobCard key={job.id} job={job} currentUser={currentUser} />
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