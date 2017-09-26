import React from 'react';
import {shallow} from 'enzyme';
import Recipe from '../js/components/Recipe';
import { shallowToJson } from 'enzyme-to-json';

let props = {
  name: "Test Name",
  imageLink: "test.png",
  headline: "Test headline",
  prepTime: "PT35M",
  calories: 355
}
describe('Recipe', () => {
  it('renders the props', () => {
    const wrapper = shallow(<Recipe recipe={props} />);
    expect(wrapper.find('h4').text()).toBe("Test Name");
    expect(wrapper.find('.headline').text()).toBe("Test headline");
    expect(wrapper.find('.calories').text()).toBe("355 kcal");
    expect(wrapper.find('.prepTime').text()).toBe("35 minutes");
    expect(wrapper.find('.image').prop('src')).toBe("test.png");
  });
  it('tests the favorite feature', () => {
    const wrapper = shallow(<Recipe recipe={props} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    wrapper.find('.favorite').simulate('click');
    expect(wrapper.find('.favorite').prop('src')).toBe("images/filledStar.png");
    wrapper.find('.favorite').simulate('click');
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  
  it('tests the ratings', () => {
    const wrapper = shallow(<Recipe recipe={props} />);
    wrapper.setState({stars: 2});
    expect(wrapper.find('path[fill="gold"]').length).toBe(2);
  });
});