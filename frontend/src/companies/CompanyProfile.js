import React, { Component } from "react";
import JoblyApi from '../JoblyApi';
import JobCard from '../jobs/JobCard'
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
    let response = {};
    response["_token"] = localStorage.getItem('_token');
    response["handle"] = this.props.match.params.handle;
    let company = await JoblyApi.getCompany(response);
    this.setState(st => ({
      jobs: [...st.jobs, ...company.jobs],
      company: { ...company },
      loading: false
    }));
    debugger;
  }
  render() {
    console.log(this.state);
    const companyData = this.state.jobs.map(job => {
      return <JobCard job={job} />
    });

    let companyProfile = this.state.loading === true ?
      <div>Loading</div> :
      <div className='container'>
        <h2>{this.state.company.name}</h2>
        <p>{this.state.company.description}</p>
        {companyData}
      </div>

    return (
      <div>
        { companyProfile }
      </div>

    );
  }
}

export default CompanyProfile