import React from 'react';
import CityCard from './CityCard';
import { shallow, mount } from 'enzyme';

describe('CityCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CityCard />);
  });

  test.skip ('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  test.skip ('should render an image', () => {
    expect(wrapper.find('.header-image').length).toEqual(1);
  });

  test.skip ('should render a city summary', () => {
    expect(wrapper.find('.summary-data').length).toEqual(1);
  });

  test.skip ('should render score data', () => {
    expect(wrapper.find('.score-data').length).toEqual(1);
  });

  test.skip ('should render a score chart', () => {
    expect(wrapper.find('.charts').length).toEqual(1);
  });

  test.skip ('should render cost-of-living data', () => {
    expect(wrapper.find('.detail-data').length).toEqual(1);
  });
});
