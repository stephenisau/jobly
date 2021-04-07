import React from "react";
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import RegisterForm from "./index";



it ('state reflects change in input', function() {
  const wrapper = mount(<RegisterForm />);
  let username = wrapper.find('#username');

  input.instance().value = 'search';
  input.simulate('change');
  
  expect(wrapper.state('search')).toEqual('search');
})

