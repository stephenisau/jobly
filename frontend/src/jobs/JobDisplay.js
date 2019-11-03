import React, { Component } from "react";
import JobList from "./JobList";
import Search from "../forms/Search";
import JoblyApi from "../JoblyApi";

class JobDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
    this.search = this.search.bind(this);
    this.apply = this.apply.bind(this);
  }

  async componentDidMount() {
    let result = await JoblyApi.getJobs();
    this.setState({ jobs: result });
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

  render() {
    return (
      <div>
        <Search search={this.search} />
        <JobList jobs={this.state.jobs} checkApplied={this.props.checkApplied} handleApply={this.props.handleApply}/>
      </div>
    );
  }
}

export default JobDisplay;