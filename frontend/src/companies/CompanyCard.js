import React, { Component } from "react";

class CompanyCard extends Component {
  render() {
    return (
    <div>CompanyCard
      <pre>{JSON.stringify(this.props, null, 4)}</pre>
    </div>
    );
  }
}

export default CompanyCard;