import React from 'react';
import CityList from './CityList';
import { shallow, mount } from 'enzyme';

describe('CityList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CityList />);
  });

  test.skip ('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  test.skip ('should render a list of city buttons', () => {
    expect(wrapper.find('.city-list-container').length).toEqual(1);
  });
});
