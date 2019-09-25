import React, { Component } from "react";
import JobList from './JobList';

class JobDisplay extends Component {

  static defaultProps = {
    jobs: [
      {id: 1, title: "Editor", salary: 118000, equity: 0.15, company_handle: "foster-rice"}
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      jobs: this.props.jobs
    }
  }

  // componentDidMount()

  render() {
    return (
      <div className="container">
        <pre>JobDisplay</pre>
        <JobList jobs={this.state.jobs}/>
      </div>
    );
  }
}

export default JobDisplay;