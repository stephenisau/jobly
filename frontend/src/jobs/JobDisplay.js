import React, { Component } from "react";
import JobList from './JobList';
import Search from '../forms/Search';
import JoblyApi from '../JoblyApi';

class JobDisplay extends Component {

  static defaultProps = {
    jobs: [
      {id: 1, title: "Editor", salary: 118000, equity: 0.15, company_handle: "foster-rice", applied: false}
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      jobs: this.props.jobs
    }
    this.search = this.search.bind(this);
  }
  async componentDidMount() {
    let response = {};
    let jobs = await JoblyApi.getJobs(response);
    this.setState({ jobs });
  }

  async search(query) {
    let response = {};
    response["search"] = query;
    let jobs = await JoblyApi.getJobs(response);
    this.setState({ jobs });
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <pre>{JSON.stringify(this.props, null, 4)}</pre>
        <Search search={this.search}/>
        <JobList jobs={this.state.jobs} addJob={this.props.addJob} />
      </div>
    );
  }
}

export default JobDisplay;