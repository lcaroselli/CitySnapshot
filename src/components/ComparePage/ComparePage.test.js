import React from 'react';
import ComparePage from './ComparePage';
import { shallow, mount } from 'enzyme';

describe('ComparePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ComparePage />);
  });

  test.skip ('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  test.skip ('should render a search input to select a city to compare to', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  test.skip ('should render two articles to hold the city and compared city, as well as the compared results', () => {
    expect(wrapper.find('article').length).toEqual(3);
  });
});
