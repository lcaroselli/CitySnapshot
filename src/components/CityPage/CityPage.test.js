import React from 'react';
import CityPage from './CityPage';
import { shallow, mount } from 'enzyme';

describe('CityPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CityPage />);
  });

  test.skip ('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  test.skip ('should render a header with appropriate city name', () => {
    expect(wrapper.find('.city-page-name').length).toEqual(1);
  });

  test.skip ('should render a Nav bar to link to different sections of the city page', () => {
    expect(wrapper.find('.city-page-nav').length).toEqual(1);
  });
});
