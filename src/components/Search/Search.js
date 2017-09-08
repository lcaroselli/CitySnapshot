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
    console.log(this.state.filteredCities)
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
        <div> { this.state.filteredCities } </div>
      </div>
    )
  }
}

//if search field empty, nothing displays 

//when a user selects a city from the search OR from the city list page, the CityPage component renders with corresponding City component
