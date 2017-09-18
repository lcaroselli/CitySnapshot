import React, { Component } from 'react';
import './CityList.css';
import CityPage from '../CityPage/CityPage';
import AppContainer from '../../containers/AppContainer';
import cityList from '../../data-helpers/cityList';

export class CityList extends Component {
  constructor() {
    super();
    this.state={
      cities: Object.keys(cityList),
      targetCity: null
    }
  }

  handleCityClick(e) {
    const filteredKey = this.state.cities.filter(el => el === e.target.innerHTML)

    const filteredCityList = cityList[filteredKey]

    this.props.submitCity(filteredCityList, filteredKey)

    this.setState({
      targetCity: filteredCityList
    })
  }

  render() {
    let cityKeys = Object.keys(cityList);

    if(!this.state.targetCity) {
      return (
      <div className='city-list'>
        <h1>City List</h1>

        <section className='city-list-container'>
        { cityKeys.map(city => {
          return (
            <button onClick={e => this.handleCityClick(e) }>{ city }</button>
          ) }) }
        </section>
      </div> )}

        if(this.state.targetCity) {
          return (
            <CityPage city={ this.state.targetCity } />
          )
        }
  }
}

export default AppContainer(CityList);
