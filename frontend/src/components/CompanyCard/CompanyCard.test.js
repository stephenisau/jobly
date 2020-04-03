import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CompanyCard from './CompanyCard';
import { BrowserRouter as Router } from 'react-router-dom';



describe("Company Card", () => {
  it("renders company card", () => {
    const company = {
      logo_url: "https://png.pngtree.com/svg/20170307/c02483909c.svg",
      name: "testCompany",
      description: "This is a test company",
      handle: "random"
    }
    const tree = renderer.create(
      <Router>
        <CompanyCard company={company} />
      </Router>
    ).toJSON()
    expect(tree).toMatchSnapshot();
  });
})

