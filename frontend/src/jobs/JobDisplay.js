import React, { Component } from "react";
import JobList from "./JobList";
import Search from "../forms/Search";
import JoblyApi from "../JoblyApi";
import UserContext from "../UserContext";
import "./JoblyDisplay.css"

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

  static contextType = UserContext;

  async search(query) {
    let response = {};
    response['_token'] = localStorage.getItem('_token');
    response['search'] = query;
    console.log("searching!")
    let jobs = await JoblyApi.getJobs(response);
    this.setState({ jobs });
  }

  async apply(job) {
    let jobId = this.state.jobs.findIndex(j => j.id === job.id)
    this.props.handleApply(job)
    let message = await JoblyApi.applyToJob(job.id);
    this.setState(st => ({
      jobs: st.jobs.map((job, id) =>
        id === jobId
          ? { ...job, state: message }
          : job)
    }));
  }

  render() {
    if (!this.props.currentUser) return <React.Fragment>Loading...</React.Fragment>
    return (
      <div id="Job-display">
        <div className="container job-display">
          <div className="row justify-content-center">
            <div className="col-8 text-center">
              <h1>
                <b>Jobs</b>
              </h1>
              <Search search={this.search} />
              <JobList jobs={this.state.jobs} apply={this.apply} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobDisplay;