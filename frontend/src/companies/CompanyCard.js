import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";


/*
Display component deailing with showing company information.
*/

class CompanyCard extends Component {
  render() {
    const imageSrc = this.props.company.logo_url ? this.props.company.logo_url : "https://png.pngtree.com/svg/20170307/c02483909c.svg"
    return (
      <div className="card mt-2 Card">
        <Link to={`companies/${this.props.company.handle}`}>
          <div className="card-body">
            <div className="logo">
              <img className="company-logo" src={imageSrc} alt="Company" />
            </div>
            <div className="company-description">
              <h3 className="card-title text-center">{this.props.company.name}</h3>
              <p className="justify-content-end mb-2 card-description">{this.props.company.description}</p>
            </div>
          </div>
        </Link>
      </div>

    );
  }
}

export default CompanyCard;