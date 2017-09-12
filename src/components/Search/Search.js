import React, { Component } from 'react';
import './Search.css';
import cityList from '../../data-helpers/cityList';
import CityPage from '../CityPage/CityPage';

export default class Search extends Component {
  constructor() {
    super();
    this.state={
      input: '',
      cities: Object.keys(cityList),
      filteredCities: [],
      targetCity: null
    }
  }

  handleChange(e) {
    this.filterCities(e.target.value);

    this.setState({
      input: e.target.value
    })
  }

  handleCityClick(e) {
    const cityStuff = this.state.cities.map(el => { return cityList[el] })

    // console.log(cityStuff)

    // const matchingCity = cityStuff.filter(el => el === )
    // filter - if the input matches the cityStuff slug

    this.setState({
      input: e.target.innerHTML,
      targetCity: 'san-diego'
    })
  }

  filterCities(cityName) {
    const filterSearchedCities = this.state.cities.filter(city => {
      return city.toLowerCase().startsWith(cityName.toLowerCase());
    })

    this.setState({
      filteredCities: filterSearchedCities
    })
  }

  handleEnter(e) {
    e.preventDefault();
  }

  render() {
    const cityDisplay = this.state.input ? "filtered-cities" : "hidden";

    return (
      <div>
      { !this.state.targetCity &&
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
      }

      { this.state.targetCity && <CityPage name={ this.state.input } city={ this.state.targetCity } /> }
    </div>
    )
  }
}

//submit SLUG of city
//give cityPage a path
//should be able to navigate down search with up and down keys
//Move SEARCH to top of NAV on cityPage
