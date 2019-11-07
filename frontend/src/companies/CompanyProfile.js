import React, { Component } from "react";
import JoblyApi from '../JoblyApi';
import CompanyJobCard from "./CompanyJobCard";
import UserContext from "../UserContext";
import { withRouter } from "react-router";

class CompanyProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      loading: true,
      company: null
    }
    this.checkApplied = this.checkApplied.bind(this);
    this.apply = this.apply.bind(this);
  }

  static contextType = UserContext;

  async componentDidMount() {
    let { handle } = this.props.match.params;
    let company = await JoblyApi.getCompany(handle);
    this.setState(st => ({
      jobs: [...st.jobs, ...company.jobs],
      company: { ...company },
      loading: false
    }));
  }

  checkApplied(id) {
    if (this.state.currentUser.user.jobs.filter(job => job.id === id).length > 0) {
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
    if (this.state.loading) return <React.Fragment>Loading...</React.Fragment>

    const jobList = this.state.jobs.map((job, id) => <CompanyJobCard key={id} job={job} checkApplied={this.checkApplied} handleApply={this.props.addJob} apply={this.apply}/>)

    return (
      <React.Fragment>
        <h2>{this.state.company.name}</h2>
        <p>{this.state.company.description}</p>
        {jobList}
      </React.Fragment>

    );
  }
}

export default withRouter(CompanyProfile);