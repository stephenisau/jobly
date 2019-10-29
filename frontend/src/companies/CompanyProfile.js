import React, { Component } from "react";
import JoblyApi from '../JoblyApi';
import JobList from '../jobs/JobList';
import { withRouter } from 'react-router-dom';

// import JobList from '../jobs/JobList';

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

    let companyProfile = this.state.loading === true ?
      <div>Loading...</div> :
      <div className='container'>
        <h2>{this.state.company.name}</h2>
        <p>{this.state.company.description}</p>
        <JobList jobs={this.state.jobs} currentUser={currentUser}/>
      </div>

    return (
      <div>
        { companyProfile }
      </div>

    );
  }
}

export default withRouter(CompanyProfile);