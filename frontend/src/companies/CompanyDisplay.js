import React, { Component } from "react";
import CompanyCard from './CompanyCard';
import JoblyApi from '../JoblyApi'
import Search from '../forms/Search';
import "./CompanyDisplay.css";

class CompanyDisplay extends Component {

  static defaultProps = {
    companies: [
      {
        handle: "ayala-buchanan", name: "Ayala-Buchanan", num_employees: 309,
        description: "Make radio physical southern. His white on attention kitchen market upon. Represent west open seven. Particularly subject billion much score thank bag somebody.",
        logo_url: "http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_arc.jpg"
      }
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      companies: []
    }
    this.search = this.search.bind(this);
  }

  async componentDidMount() {
    let companies = await JoblyApi.getCompanies();
    this.setState({ companies });
  }

  async search(query) {
    let response = {};
    response["search"] = query;
    let companies = await JoblyApi.getCompanies(response);
    this.setState({ companies });
  }


  render() {
    const companies = this.state.companies.length ? this.state.companies.map(company =>
      <CompanyCard company={company} key={company.handle} />) : "Sorry, no results"
    return (
      <div id="company-display">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <h1 className="text-center">
                <b>Companies</b>
              </h1>
              <Search search={this.search} />
              {companies}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyDisplay;