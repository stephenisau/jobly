import React, { Component } from "react";
import CompanyCard from './CompanyCard';

class CompanyList extends Component {

  render() {
    const companyList = this.props.companies.map(company => {
      return <CompanyCard company={company}/>
    })
    return (
    <div>CompanyList
      {companyList}
    </div>
    );
  }
}

export default CompanyList;