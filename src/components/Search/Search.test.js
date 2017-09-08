import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { shallow, mount } from 'enzyme';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  })

  test('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  test('should return a containing div', () => {
    expect(wrapper.find('.search-wrapper').length).toEqual(1);
  })

  test('should return a search bar', () => {
    expect(wrapper.find('input').length).toEqual(1);
  })
})
