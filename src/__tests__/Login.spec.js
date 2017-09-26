import React from 'react';
import {shallow} from 'enzyme';
import Login from '../js/components/Login';

describe('Login', () =>{
  it('renders without fail', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('h2').text()).toBe("Login");
  });
  it('enters an email and password', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.state().email).toEqual("");
    expect(wrapper.state().password).toEqual("");
    wrapper.find('.email').simulate('change', {target: {value: 'Test@test.com', className: "email"}});
    wrapper.find('.password').simulate('change', {target: {value: 'Test', className: "password"}});
    expect(wrapper.state().email).toEqual('Test@test.com');
    expect(wrapper.state().password).toEqual('Test');
  });
  it('displays an error msg on a invalid email address', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.state().errorMsg).toEqual("");
    wrapper.find('.email').simulate('change', {target: {value: 'Test@test', className: "email"}});
    wrapper.find('.password').simulate('change', {target: {value: 'Test', className: "password"}});
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(wrapper.find('.errorMsg').text().length).toBeGreaterThan(0);
  });
});