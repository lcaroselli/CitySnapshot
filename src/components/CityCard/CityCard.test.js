import React from 'react';
import CityCard from './CityCard';
import { withRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';

describe('CityCard', () => {
  let wrapper;
  let mountWrapper;
  let shallowWrapper;
  let store;

  let initialState = { output:100 }
  let mockStore = configureStore();

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper =  withRouter(<CityCard />);
    shallowWrapper = shallow(<CityCard store={store}/>).dive();
    mountWrapper = mount(<CityCard />);
  });

  test.skip ('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  test.skip ('should render an image', () => {
    expect(shallowWrapper.find('.header-image').length).toEqual(1);
  });

  test.skip ('should render a city summary', () => {
    expect(shallowWrapper.find('.summary-data').length).toEqual(1);
  });

  test.skip ('should render score data', () => {
    expect(shallowWrapper.find('.score-data').length).toEqual(1);
  });

  test.skip ('should render a score chart', () => {
    expect(shallowWrapper.find('.charts').length).toEqual(1);
  });

  test.skip ('should render cost-of-living data', () => {
    expect(shallowWrapper.find('.detail-data').length).toEqual(1);
  });
});
