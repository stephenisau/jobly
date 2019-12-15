import React from "react";
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import Search from "../Forms/Search";

it('renders without crashing', function() {
  shallow(<Search/>);
});

it('matches snapshot', function() {
  let wrapper = shallow(<Search/>);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it ('state reflects change in input', function() {
  const wrapper = mount(<Search />);
  let input = wrapper.find('#searchbar');

  input.instance().value = 'search';
  input.simulate('change');
  
  expect(wrapper.state('search')).toEqual('search');
})


