import React from "react";
import { mount, shallow } from 'enzyme';
import Home from '../Home';

it('renders without crashing', function() {
  shallow(<Home />);
})

it('matches snapshot', function() {
  let wrapper = shallow(<Home />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
})