import React from "react";
import { mount, shallow } from 'enzyme';
import Profile from '../NavBar/Profile';

it('renders without crashing', function () {
  shallow(<Profile />)
});

it('renders form correctly', () => {
  let wrapper = mount(<Profile />);
})

it('matches snapshot', () => {
  let wrapper = shallow(<Profile />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
})

it('form inputs reflect state change', () => {
  const wrapper = mount(<Profile />);
  let firstName = wrapper.find("#first_name");
  let lastName = wrapper.find("#last_name");
  let email = wrapper.find("#email");
  let password = wrapper.find("#password");
  
  firstName.simulate('change', { target: { value: 'first' } });
  lastName.simulate('change', { target: { value: 'last' } });
  email.simulate('change', { target: { value: 'email' } });
  password.simulate('change', { target: { value: 'password' } });

  expect(wrapper.state('first_name')).toEqual('first');
  expect(wrapper.state('last_name')).toEqual('last');
  expect(wrapper.state('email')).toEqual('email');
  expect(wrapper.state('password')).toEqual('password');


});

it ('simulates form submission', () => {

});
