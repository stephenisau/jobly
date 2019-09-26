import React, { Component } from "react";
import JoblyApi from '../JoblyApi';
import JobCard from '../jobs/JobCard'
import JobList from '../jobs/JobList';

class CompanyProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      loading: false
    }
  }
  async componentDidMount() {
    let response = {};
    response["_token"] = localStorage.getItem('_token');
    response["handle"] = this.props.match.params.handle;
    let company = await JoblyApi.getCompany(response);
    this.setState(st => ({
      jobs: [...st.jobs, ...company.jobs]
    }));
  }
  render() {
    const companyData = this.state.jobs.map(job => {
      return <JobCard job={job}/>
    })
    return (
      <div>
        {/* <pre>{JSON.stringify(this.state.jobs, null, 4)}</pre> */}
        {companyData}
      </div>
      
    );
  }
}

export default CompanyProfile