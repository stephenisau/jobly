import React, { Component } from "react";
import JoblyApi from '../JoblyApi';
import JobCard from "../jobs/JobCard";
import { withRouter } from 'react-router-dom';

class CompanyProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      loading: true,
      company: this.props.match.params
    }
  }
  async componentDidMount() {
    let handle = this.props.match.params;
    let company = await JoblyApi.getCompany(handle);
    this.setState(st => ({
      jobs: [...st.jobs, ...company.jobs],
      company: { ...company },
      loading: false
    }));
  }

  render() {
    if (this.state.loading) return <React.Fragment>Loading...</React.Fragment>
    const jobList = this.state.jobs.map(job => <JobCard job={job} checkApplied={this.props.checkApplied} handleApply={this.props.addJob}/>)
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