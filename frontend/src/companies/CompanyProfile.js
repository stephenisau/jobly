import React, { Component } from "react";
import JoblyApi from '../JoblyApi';
import JobList from '../jobs/JobList';

class CompanyProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      company: {}
    }
  }
  async componentDidMount() {
    let response = {};
    response["_token"] = localStorage.getItem('_token');
    response["handle"] = this.props.match.params.handle;
    let company = await JoblyApi.getCompany(response);
    // console.log(company)
    this.setState({ company });
    // console.log(this.state.company.jobs);
    // debugger;
  }
  render() {
    console.log(this.state.company.length)
    console.log(this.state.company.jobs);
    let companyData = this.state.company.length > 0 ?
      <div className="container">
        <h3>{this.state.company.name}</h3>
        <p>{this.state.company.description}</p>
        <JobList jobs={this.state.company.jobs} />
      </div> :
      <div>No jobs</div>
    return (
      <div>
        { companyData }
      </div>
      
    );
  }
}

export default CompanyProfile;