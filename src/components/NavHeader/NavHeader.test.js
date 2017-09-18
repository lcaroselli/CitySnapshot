import React from 'react';
import ReactDOM from 'react-dom';
import NavHeader from './NavHeader';
import { shallow, mount } from 'enzyme';

describe('NavHeader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavHeader />);
  });

  test ('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  test ('should return a containing div', () => {
    expect(wrapper.find('.navigation-wrapper').length).toEqual(1);
  });

  test ('should return a header', () => {
    expect(wrapper.find('header').length).toEqual(1);
  });

  test ('should return a logo', () => {
    expect(wrapper.find('.logo').length).toEqual(1);
  });

  test ('should return a nav bar', () => {
    expect(wrapper.find('nav').length).toEqual(1);
  });

  test ('should return NavLinks', () => {
    expect(wrapper.find('NavLink').length).toEqual(2);
  });
})
