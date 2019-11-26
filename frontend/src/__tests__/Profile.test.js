import React from "react";
import { mount, shallow } from 'enzyme';
import Profile from '../NavBar/Profile';

it('renders without crashing', function () {
  const wrapper = shallow(<Profile />);
  wrapper.setProps({
    currentUser: {
      user: {
      username: "testuer",
      first_name: "patrick",
      last_name: "star",
      email: "patrick@email.com"} 
    } 
  })
  console.log(wrapper.props());
});

it('renders form correctly', () => {
  let wrapper = mount(<Profile />);
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

  console.log(firstName)
  console.log(wrapper.state)
  expect(wrapper.state('first_name')).toEqual('first');
  expect(wrapper.state('last_name')).toEqual('last');
  expect(wrapper.state('email')).toEqual('email');
  expect(wrapper.state('password')).toEqual('password');


});
