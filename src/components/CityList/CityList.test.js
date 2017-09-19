import React from 'react';
import CityList from './CityList';
import { shallow, mount } from 'enzyme';
import { withRouter } from 'react-router';

describe('CityList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = withRouter(<CityList />);
  });

  test ('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  test.skip ('should render a list of city buttons', () => {
    expect(wrapper.find('.city-list-container').length).toEqual(1);
  });
});
