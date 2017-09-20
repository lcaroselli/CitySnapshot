import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { shallow, mount } from 'enzyme';

describe('Search', () => {
  let wrapper;
  let mountWrapper;

  const handleChangeFn = jest.fn();

  beforeEach( () => {
    wrapper = shallow(<Search
                      onChange = { handleChangeFn } />);
    mountWrapper = mount(<Search
                      onChange = { handleChangeFn } />);
  });

  test.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  test.skip ('should have a default state', () => {
   expect(wrapper.state()).toEqual({
     input: '',
     cities: Object.keys(cityList),
     filteredCities: [],
     targetCity: null
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





  test.skip('should return a containing div', () => {
    expect(wrapper.find('.search-wrapper').length).toEqual(1);
  });

  test.skip('should return a search bar', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });
});
