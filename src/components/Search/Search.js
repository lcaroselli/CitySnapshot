import React, { Component } from 'react';
import './Search.css';
import cityList from '../../data-helpers/cityList';

export default class Search extends Component {
  constructor() {
    super();
    this.state={
      input: '',
      cities: Object.keys(cityList),
      filteredCities: []
    }
  }

  handleChange(e) {
    this.filterCities(e.target.value);

    this.setState({
      input: e.target.value,
    })
  }

  filterCities(cityName) {
    const filterSearchedCities = this.state.cities.filter(city => {
      return city.startsWith(cityName);
    })

    this.setState({
      filteredCities: filterSearchedCities
    })
  }

  // handleEnter(e) {
  //   if(e.keyCode === 13) {
  //     //submitSearch
  //   }
  // }

  render() {
    return (
      <div className='search-wrapper'>
        <p className='search-text'>A cost-of-living comparison tool & more</p>
        <input placeholder='Search for a City' type='search' value={ this.state.input } onChange={ e => this.handleChange(e) } />
        <div className='filtered-cities'> { this.state.filteredCities.map(city => {
          return (
            <p><button>{ city }</button></p>
          ) }) }
        </div>
      </div>
    )
  }
}

//button onclick submit request AND put in the input field

//can use down arrow to go through search list, and either click and it will redirect or hit enter on that item and it will redirect
//if search field empty, nothing displays
//if search can't match anything even with something in input field, tool tip that the city doesn't exist in our database

//when a user selects a city from the search OR from the city list page, the CityPage component renders with corresponding City component


//On submit, it should fetch all relevant data and create relevant city page
// https://api.teleport.org/api/urban_areas/slug:{SELECTEDCITY}/scores/
