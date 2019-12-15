import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

class CompanyCard extends Component {
  render() {
    const imageSrc = this.props.company.logo_url ? this.props.company.logo_url : "https://png.pngtree.com/svg/20170307/c02483909c.svg"
    return (
      <div className="card mt-2 Card">
        <Link to={`companies/${this.props.company.handle}`}>
          <div className="card-body">
            <h3 className="card-title text-center">{this.props.company.name}</h3>
            <img className="company-logo" src={imageSrc} alt="Company" />
            <p className="justify-content-end mb-2 card-description">{this.props.company.description}</p>
          </div>
        </Link>
      </div>

    );
  }
}

export default CompanyCard;