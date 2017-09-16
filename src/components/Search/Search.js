import React, { Component } from 'react';
import './Search.css';
import cityList from '../../data-helpers/cityList';
import CityPage from '../CityPage/CityPage';
import AppContainer from '../../containers/AppContainer';

export class Search extends Component {
  constructor() {
    super();
    this.state={
      input: '',
      cities: Object.keys(cityList),
      filteredCities: [],
      targetCity: null
    };
  }

  handleChange(e) {
    this.filterCities(e.target.value);

    this.setState({
      input: e.target.value
    })
  }

  handleCityClick(e) {
    const filteredKey = this.state.cities.filter(el => el === e.target.innerHTML)

    const filteredCityList = cityList[filteredKey]

    this.props.submitCity(filteredCityList)

    this.setState({
      input: e.target.innerHTML,
      targetCity: filteredCityList
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
        <div className='search-wrapper home'>
          <p className='search-text'>A cost-of-living comparison tool & more</p>
          <form onSubmit={ this.handleEnter }>
            <input placeholder='Search for a City' type='search' value={ this.state.input } onChange={ e => this.handleChange(e) } />
            <div className={ cityDisplay }> { this.state.filteredCities.map(city => {
              return (
                <p><button onClick={ e => this.handleCityClick(e) }>{ city }</button></p>
              ) }) }
            </div>
          </form>
        </div>
      }
      { this.state.targetCity &&
        <CityPage name={ this.state.input } city={ this.state.targetCity } />
      }
    </div>
    )
  }
}

export default AppContainer(Search);
