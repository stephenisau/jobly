import React, { Component } from "react";
import JoblyApi from '../JoblyApi';
import JobList from '../jobs/JobList';
import { withRouter } from 'react-router-dom';

class CompanyProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      loading: true
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

    const { currentUser } = this.props;
    if (this.state.loading) return <React.Fragment>Loading...</React.Fragment>

    return (
      <React.Fragment>
        <h2>{this.state.company.name}</h2>
        <p>{this.state.company.description}</p>
        <JobList jobs={this.state.jobs} currentUser={currentUser} />
      </React.Fragment>

    );
  }
}

export default withRouter(CompanyProfile);