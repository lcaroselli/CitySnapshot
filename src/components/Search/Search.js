import React, { Component } from 'react';
import './Search.css';
import cityList from '../../data-helpers/cityList';

export default class Search extends Component {
  constructor() {
    super();
    this.state={
      input: '',
      cities: Object.keys(cityList),
      filteredCities: [],
      selectedCity: null
    }
  }

  handleChange(e) {
    this.filterCities(e.target.value);

    this.setState({
      input: e.target.value,
    })
  }

  handleCityClick(e) {
    this.setState({
      input: e.target.innerHTML
    })
    this.submitCity()
  }

  filterCities(cityName) {
    const filterSearchedCities = this.state.cities.filter(city => {
      return city.startsWith(cityName);
    })

    this.setState({
      filteredCities: filterSearchedCities
    })
  }

  submitCity() {
    console.log('enter');
    // this.setState({
    //   selectedCity:
    // })
  }

  handleEnter(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.submitCity();
    }
  }

  render() {
    const cityDisplay = this.state.input ? "filtered-cities" : "hidden";

    return (
      <div className='search-wrapper'>
        <p className='search-text'>A cost-of-living comparison tool & more</p>
        <form onSubmit={ e => this.handleEnter(e) }>
          <input placeholder='Search for a City' type='search' value={ this.state.input } onChange={ e => this.handleChange(e) } />
          <div className={ cityDisplay }> { this.state.filteredCities.map(city => {
            return (
              <p><button onClick={ e => this.handleCityClick(e) }>{ city }</button></p>
            ) }) }
          </div>
        </form>
      </div>
    )
  }
}

//button onclick submit request (redirect to city page w/ slug id), should fetch all relevant data and create relevant city page
//BUG on enter when you click on one, go back to input, then hit enter -- goes up to first one on list as innerHTML value???
