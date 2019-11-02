import React, { Component } from "react";
import CompanyCard from './CompanyCard';
import { Link } from 'react-router-dom';
import './CompanyList.css'

class CompanyList extends Component {

  render() {
    const companyList = this.props.companies.map((company) => {
      return <Link
        key={company.handle}
        className='unlink'
        to={`companies/${company.handle}`}>
        <CompanyCard company={company} key={company.handle} />
      </Link>
    });
    return (
      <div>CompanyList
      {companyList}
      </div>
    );
  }
}

export default CompanyList;