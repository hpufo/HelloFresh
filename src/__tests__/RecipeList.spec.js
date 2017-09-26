import React from 'react';
import {shallow,mount} from 'enzyme';
import RecipeList from '../js/components/RecipeList';

const recipe = {
  name: "Test Name",
  imageLink: "test.png",
  headline: "Test headline",
  prepTime: "PT35M",
  calories: 355
}
const sessionStorageMock = {
  getItem: jest.fn().mockReturnValue(null),
  removeItem: jest.fn().mockReturnValue(null),
  clear: jest.fn().mockReturnValue(null),
};
global.sessionStorage = sessionStorageMock;

describe('RecipeList', () =>{
  it('renders four recipes', () => {
    //Using jasmine's spyOn since jest's spyOn behaves differently than you would expect
    spyOn(RecipeList.prototype, 'componentWillMount');
    const recipes = Array(4).fill(recipe);
    const wrapper = mount(<RecipeList />).setState({recipes: recipes});
    expect(wrapper.find('.recipe').length).toBe(4);
  });
});