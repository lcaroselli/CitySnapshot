import React from 'react';
import CityPage from './CityPage';
import { shallow, mount } from 'enzyme';
import { withRouter } from 'react-router';

describe('CityPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = withRouter(<CityPage />);
  });

  test ('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  test.skip ('should render a header with appropriate city name', () => {
    wrapper = shallow(<CityPage />);
    expect(wrapper.find('.city-page-name').length).toEqual(1);
  });

  test.skip ('should render a Nav bar to link to different sections of the city page', () => {
    wrapper = shallow(<CityPage />);
    expect(wrapper.find('.city-page-nav').length).toEqual(1);
  });

  test.skip ('should run componentDidMount after mounting', () => {
    wrapper = shallow(<CityPage />);
    wrapper.instance().componentDidMount = jest.fn();
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().componentDidMount).toHaveBeenCalled();
 });

 test.skip ('should run componentDidMount after mounting and fetch data', () => {
   wrapper = mount(<CityPage />)
   wrapper.instance().fetchData = jest.fn()

   expect(wrapper.instance().componentDidMount).toHaveBeenCalled()
   expect(this.props.fetchData).toHaveBeenCalled()
 });

 test.skip ('should fetch correct data after mounting', () => {
   mockCityData = {
    "categories": [
        {
            "name": "Housing",
            "score_out_of_10": 3.0955
        },
        {
            "name": "Cost of Living",
            "score_out_of_10": 5.276
        },
        {
            "name": "Startups",
            "score_out_of_10": 8.3505
        },
        {
            "name": "Venture Capital",
            "score_out_of_10": 8.533
        },
        {
            "name": "Travel Connectivity",
            "score_out_of_10": 2.662
        },
        {
            "name": "Commute",
            "score_out_of_10": 4.258499999999999
        },
        {
            "name": "Business Freedom",
            "score_out_of_10": 8.671
        },
        {
            "name": "Safety",
            "score_out_of_10": 6.7815
        },
        {
            "name": "Healthcare",
            "score_out_of_10": 8.723666666666666
        },
        {
            "name": "Education",
            "score_out_of_10": 5.4505
        },
        {
            "name": "Environmental Quality",
            "score_out_of_10": 7.58025
        },
        {
            "name": "Economy",
            "score_out_of_10": 6.506499999999999
        },
        {
            "name": "Taxation",
            "score_out_of_10": 4.382000000000001
        },
        {
            "name": "Internet Access",
            "score_out_of_10": 7.719
        },
        {
            "name": "Leisure & Culture",
            "score_out_of_10": 8.21
        },
        {
            "name": "Tolerance",
            "score_out_of_10": 8.2445
        },
        {
            "name": "Outdoors",
            "score_out_of_10": 6.395999999999999
        }
    ],
    "summary": "<p>San Diego, California, is among the top cities with a <b>free business environment</b>.\n\n    \n        According to our city rankings, this is a good place to live with high ratings in <b>startups</b>, <b>venture capital</b> and <b>safety</b>.\n    \n\n    \n</p>\n\n\n    <p>San Diego is one of the top ten city matches for 1.4% of Teleport users.</p>\n",
  }

   fetchMock.get('https://api.teleport.org/api/urban_areas/slug:san-diego/scores/', {
     status: 200,
     body: mockCityData
   });

   expect(fetchMock.routes[0].method).toEqual('GET')
   expect(fetchMock._matchedCalls.length).toEqual(0)
   expect(fetchMock.routes[0].response.body).toEqual(mockCityData)

   expect(fetchMock.called()).toEqual(true)
 });

});
