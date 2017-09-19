import React from 'react';
import ComparePage from './ComparePage';
import { shallow, mount } from 'enzyme';
import { withRouter } from 'react-router';

describe('ComparePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = withRouter(<ComparePage />);
  });

  test ('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  test.skip ('should render a search input to select a city to compare to', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  test.skip ('should render two articles to hold the city and compared city, as well as the compared results', () => {
    expect(wrapper.find('article').length).toEqual(3);
  });
});
