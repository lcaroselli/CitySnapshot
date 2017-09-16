import React, { Component } from 'react';
import './Search.css';
import cityList from '../../data-helpers/cityList';
import CityPage from '../CityPage/CityPage';
import AppContainer from '../../containers/AppContainer';
import Krakow from '../../assets/krakow.png'
import Tokyo from '../../assets/tokyo.png'
import Warsaw from '../../assets/warsaw.png'

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

    this.props.submitCity(filteredCityList, filteredKey)

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

      <section className='map-section'>

        <img className='krakow' src={ Krakow } alt='Krakow city view'/>

        <img className='tokyo' src={ Tokyo } alt='Tokyo city view'/>

        <img className='warsaw' src={ Warsaw } alt='Warsaw city view'/>
      </section>

      <p className='best-place-text'>Find Your Best Place</p>
    </div>
    )
  }
}

export default AppContainer(Search);

//Down/Up arrows on Search results
