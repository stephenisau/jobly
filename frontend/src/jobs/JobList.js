import React, { Component } from "react";
import Search from '../forms/Search';
import JobCard from "./JobCard"
import JoblyApi from '../JoblyApi';

class JobList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
    this.search = this.search.bind(this);
    this.apply = this.apply.bind(this);
  }

  async search(search) {
    let jobs = await JoblyApi.getJobs(search);
    this.setState({ jobs });
  }

  async apply(idx) {
    let jobId = this.state.jobs[idx].id;
    let message = JoblyApi.applyToJob(jobId);
    this.setState(st => ({
      jobs: st.jobs.map(job =>
        job.id === jobId
          ? { ...job, state: message }
          : job)
    }));
  }

  async componentDidMount() {
    let jobs = await JoblyApi.getJobs();
    this.setState({ jobs });
  }

  render() {
    debugger;
    console.log(this.props);
    const jobList = this.state.jobs.map(job => (
      <React.Fragment>
        <JobCard job={job} handleApply={this.handleApply} checkApplied={this.props.checkApplied}/>
      </React.Fragment>
    ))
    return (
      <React.Fragment>
        <Search search={this.search}/>
        {jobList}
      </React.Fragment>
    );
  }
}

export default JobList;