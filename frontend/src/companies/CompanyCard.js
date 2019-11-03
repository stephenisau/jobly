import React, { Component } from "react";
import { Link } from "react-router-dom";

class CompanyCard extends Component {
  render() {
    let img = this.props.company.logo_url ?
      <img src="https://png.pngtree.com/svg/20170307/c02483909c.svg" alt={`${this.props.company.name} logo`} /> : <img src={this.props.company.logo_url} alt={`${this.props.company.name} logo`} />
    return (
      <Link exact to={`companies/${this.props.company.handle}`}>
        <div className="Card card mt-3">
          <div className="card-body">
            <h6>{this.props.company.name}</h6>
            <p>{this.props.company.description}</p>
            {img}
          </div>
        </div>
      </Link>

    );
  }
}

export default CompanyCard;