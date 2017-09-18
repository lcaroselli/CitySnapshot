import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test ('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  test ('should render applicable components upon page load', () => {
    expect(wrapper.find('NavHeader').length).toEqual(1);
  });
});
