import React from "react";
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from '../NavBar/NavBar';

describe("<NavBar />", () => {
  it('renders without crashing', function() {
    shallow(<NavBar/>);
  });

  it('matches snapshot', function() {
    let wrapper = shallow(<NavBar/>);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('contains 2 NavLinks if logged out', () => {
    const numLinks = shallow(<NavBar />).find('NavLink').length;
    expect(numLinks).toEqual(3);
  });

});

