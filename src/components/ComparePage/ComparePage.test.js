import React from 'react';
import ComparePage from './ComparePage';
import { shallow, mount } from 'enzyme';
import { withRouter } from 'react-router';

describe('ComparePage', () => {
  let wrapper;
  let mountWrapper;

  const handleChangeFn = jest.fn();

  beforeEach( () => {
    wrapper = shallow(<ComparePage
                      onChange = { handleChangeFn } />);
    mountWrapper = mount(<ComparePage
                      onChange = { handleChangeFn } />);
  });

  test.skip ('should exist', () => {
    let wrapperRoute =  withRouter(<ComparePage />);
    expect(wrapperRoute).toBeDefined();
  });

  test.skip ('should have a default state', () => {
   expect(wrapper.state()).toEqual({
     input: '',
     cities: Object.keys(cityList),
     filteredCities: []
   });
 });

  test.skip ('should have a function for onChange', () => {
    expect(mountWrapper.props().handleChange).toEqual(handleChangeFn);
  });

  test.skip ('should handle a change in the input field', () => {
    const inputField = wrapper.find('input');

    inputField.simulate('change');

    expect(handleChangeFn).toHaveBeenCalled();
    expect(handleChangeFn).toHaveBeenCalledTimes(1);

    inputField.simulate('change');
    expect(handleChangeFn).toHaveBeenCalledTimes(2);
  });

  test.skip ('should render a search input to select a city to compare to', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  test.skip ('should render two articles to hold the city and compared city, as well as the compared results', () => {
    expect(wrapper.find('article').length).toEqual(3);
  });
});
