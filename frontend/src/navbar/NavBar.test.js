import React from "react";
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from '../NavBar/NavBar';

it('renders without crashing', function() {
  shallow(<NavBar/>);
});

it('matches snapshot', function() {
  let wrapper = shallow(<NavBar/>);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
