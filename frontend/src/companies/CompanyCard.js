import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

class CompanyCard extends Component {
  render() {
    const imageSrc = this.props.company.logo_url ? this.props.company.logo_url : "https://png.pngtree.com/svg/20170307/c02483909c.svg"
    return (
      <Link to={`companies/${this.props.company.handle}`}>
        <div className="Card card mt-3">
          <div className="card-body">
            <h6>{this.props.company.name}</h6>
            <p>{this.props.company.description}</p>
            <img 
              className="company-logo"
              src={imageSrc}
              alt="Company"/>
          </div>
        </div>
      </Link>

    );
  }
}

export default CompanyCard;