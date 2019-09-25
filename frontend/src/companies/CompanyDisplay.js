import React, { Component } from "react";
import CompanyList from './CompanyList';

class CompanyDisplay extends Component {
  
  static defaultProps = {
    companies: [
      {handle: "ayala-buchanan", name: "Ayala-Buchanan",	num_employees: 309,
        description: "Make radio physical southern. His white on attention kitchen market upon. Represent west open seven. Particularly subject billion much score thank bag somebody.", 
        logo_url: "http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_arc.jpg"
      }
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      companies: this.props.companies
    }
  }

  
  render() {
    
    return (
    <div>CompanyDisplay
      <CompanyList companies={this.state.companies} />
    </div>
    );
  }
}

export default CompanyDisplay;