import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CompanyDisplay from './CompanyDisplay';


const mockData = {
  companies: [
    {
      handle: "ayala-buchanan", name: "Ayala-Buchanan", num_employees: 309,
      description: "Make radio physical southern. His white on attention kitchen market upon. Represent west open seven. Particularly subject billion much score thank bag somebody.",
      logo_url: "http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_arc.jpg"
    }
  ]
}

beforeAll(() => {
  global.fetch = jest.fn();
  // window.fetch = jest.fn();
});

let wrapper;



beforeEach(() => {
  // wrapper = shallow(<CompanyDisplay />, { disableLifecycleMethods: true });
});

afterEach(() => {
  // wrapper.unmount();
});

it("renders loading text before making an API call", () => {
  wrapper = shallow(<CompanyDisplay />);
  expect(wrapper.text().includes("Sorry, no results")).toBe(true);
});


it("renders companies after API call", () => {
  const spyDidMount = jest.spyOn(CompanyDisplay.prototype, "componentDidMount");
  fetch.mockImplementation(() => {
    return Promise.resolve({
      status: 200,
      json: () => { return Promise.resolve(mockData.companies) }
    });
  });
  const didMount = wrapper.instance().componentDidMount();
  expect(spyDidMount).toHaveBeenCalled();

  didMount.then(() => {
    wrapper.update();
    expect(wrapper.find(".Card").text()).toContain("Ayala-Buchanan");
  });

})