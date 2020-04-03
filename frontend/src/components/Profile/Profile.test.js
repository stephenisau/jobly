import React from "react";
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Profile from '../NavBar/Profile';

const currentUser = {
  currentUser: {
    user: {
      username: "testuer",
      first_name: "patrick",
      last_name: "star",
      email: "patrick@email.com"
    }
  }
}


it('renders without crashing', function () {
  shallow(<Profile />);
});

it('matches snapshot', function() {
  let wrapper = shallow(<Profile />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});


it('renders form correctly', () => {
  mount(<Profile currentUser={currentUser} />);
})

it('form inputs reflect state change', () => {
  const wrapper = mount(<Profile currentUser={currentUser}/>);
  let firstName = wrapper.find("#first_name");
  let lastName = wrapper.find("#last_name");
  let email = wrapper.find("#email");
  let password = wrapper.find("#password");

  firstName.instance().value = 'first';
  firstName.simulate('change');
  lastName.instance().value = 'last';
  lastName.simulate('change');
  email.instance().value = 'email';
  email.simulate('change');
  password.instance().value = 'password';
  password.simulate('change');

  expect(wrapper.state('first_name')).toEqual('first');
  expect(wrapper.state('last_name')).toEqual('last');
  expect(wrapper.state('email')).toEqual('email');
  expect(wrapper.state('password')).toEqual('password');


});
