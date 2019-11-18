import React, { Component } from "react";
import JoblyApi from '../JoblyApi';
import CompanyJobCard from "./CompanyJobCard";
import { withRouter } from "react-router";

import jwt from "jsonwebtoken";

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

  async componentDidMount() {
    let { handle } = this.props.match.params;
    let token = localStorage.getItem("_token");
    let userInfo = jwt.decode(token);
    let company = await JoblyApi.getCompany(handle, userInfo);
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
    let jobId = this.state.jobs.findIndex(j => j.id === job.id)
    this.props.handleApply(job)
    let message = await JoblyApi.applyToJob(job.id);
    this.setState(st => ({
      jobs: st.jobs.map((job, idx) =>
        idx === jobId
          ? { ...job, state: message }
          : job)
    }));
  }


  render() {
    if (this.state.loading) return <React.Fragment>Loading...</React.Fragment>

    return (
      <React.Fragment>
        <h2>{this.state.company.name}</h2>
        <p>{this.state.company.description}</p>
        {this.state.jobs.map((job, id) => <CompanyJobCard key={id} job={job} checkApplied={this.checkApplied} handleApply={this.props.addJob} apply={this.apply}/>)}
      </React.Fragment>

    );
  }
}

export default withRouter(CompanyProfile);