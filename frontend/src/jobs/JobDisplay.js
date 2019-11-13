import React, { Component } from "react";
import JobList from "./JobList";
import Search from "../Forms/Search";
import JoblyApi from "../JoblyApi";
import UserContext from "../UserContext";

class JobDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
    this.search = this.search.bind(this);
    this.apply = this.apply.bind(this);
    this.checkApplied = this.checkApplied.bind(this);
  }

  async componentDidMount() {
    let result = await JoblyApi.getJobs();
    this.setState({ jobs: result });
  }

  static contextType = UserContext;

  async search(query) {
    let response = {};
    response['_token'] = localStorage.getItem('_token');
    response['search'] = query;
    let jobs = await JoblyApi.getJobs(response);
    this.setState({ jobs });
  }

  checkApplied(id) {
    if (this.props.currentUser.user.jobs.filter(job => job.id === id).length > 0) {
      return true
    } else {
      return false;
    }
  }

  async apply(job) {
    let idx = job.id - 1;
    let jobId = this.state.jobs[idx].id;
    this.props.handleApply(job)
    let message = await JoblyApi.applyToJob(jobId);
    this.setState(st => ({
      jobs: st.jobs.map(job =>
        job.id === jobId
          ? { ...job, state: message }
          : job)
    }));
  }

  render() {
    console.log(this.state);
    if (!this.props.currentUser) return <React.Fragment>Loading...</React.Fragment>
    return (
      <div>
        <Search search={this.search} />
        <JobList jobs={this.state.jobs} checkApplied={this.checkApplied} handleApply={this.props.handleApply} apply={this.apply}/>
      </div>
    );
  }
}

export default JobDisplay;