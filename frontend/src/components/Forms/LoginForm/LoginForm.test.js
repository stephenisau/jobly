import React from 'react';
import LoginForm from './index';
import renderer from "react-test-renderer";
import { shallow } from 'enzyme';

const renderLoginForm = (args) => {
  const defaultProps = {
    currentUser: {}
  }
  const props = {...defaultProps, ...args};
  return shallow(<LoginForm {...props} />)
};


describe("<LoginForm />", () => {

  it("matches snapshot", () => {
    const tree = renderer.create(<LoginForm />);
    expect(tree).toMatchSnapshot();
  });

  it ("renders login form", () => {
    const wrapper = renderLoginForm();
    expect(wrapper.find("form").length).toBe(1);
  })
});