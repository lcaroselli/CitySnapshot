import React, { Component } from 'react';
import AppContainer from '../../containers/AppContainer';
import CityCard from '../CityCard/CityCard'
import './ComparePage.css';
import { handleCityScoreDisplay } from '../../data-helpers/dataCleaner';
import cityList from '../../data-helpers/cityList';


export class ComparePage extends Component {
  constructor() {
    super();
    this.state={
      input: '',
      cities: Object.keys(cityList),
      filteredCities: [],
    };
  }

  handleChange(e) {
    this.filterCities(e.target.value);

    this.setState({
      input: e.target.value
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

  handleCityClick(e) {
    this.cityScores2();
    this.cityImage2();

    const filteredKey = this.state.cities.filter(el => el === e.target.innerHTML)

    const filteredCityList = cityList[filteredKey]

    this.props.submitCity2(filteredCityList, filteredKey)

    this.setState({
      input: e.target.innerHTML
    })
  }

  handleEnter(e) {
    e.preventDefault();
  }

  cityScores2() {
  	this.props.fetchScoreData2(
  		`https://api.teleport.org/api/urban_areas/slug:${ this.props.submittedCity2.city }/scores/`
  	);
  }

  cityImage2() {
    this.props.fetchImageData2(
  		`https://api.teleport.org/api/urban_areas/slug:${ this.props.submittedCity2.city }/images/`
  	);
  }

  mappedCityScoreData = () => {
    return handleCityScoreDisplay(this.props.cityScoreData).map(city => (
      <section>
        <p className='scored'>{ city.name }: <span>{ Math.round(city.score) }</span></p>
      </section>
    ))
  }

  cityImageData = () => {
    return this.props.cityImageData.map(city => ( <img className='city-image' src={ city.image.web }/> ))
  }

  mappedCityScoreData2 = () => {
    return handleCityScoreDisplay(this.props.cityScoreData2).map(city => (
      <section>
        <p className='scored'>{ city.name }: <span>{ Math.round(city.score) }</span></p>
      </section>
    ))
  }

  cityImageData2 = () => {
    return this.props.cityImageData2.map(city => ( <img className='city-image' src={ city.image.web }/> ))
  }

  render() {
    const cityDisplay = this.state.input ? "filtered-cities" : "hidden";

  return (
    <div>
      <div className='form-div'>
        <form onSubmit={ this.handleEnter }>
          <input placeholder='Search for a City to Compare to' type='search' value={ this.state.input } onChange={ e => this.handleChange(e) } />
          <div className={ cityDisplay }> { this.state.filteredCities.map(city => {
            return (
              <p><button onClick={ e => this.handleCityClick(e) }>{ city }</button></p>
            ) }) }
          </div>
        </form>
      </div>

      <div className='compare-wrapper'>
      <h1>Compare Cities</h1>
      <section className='compare-cities'>
        <article className='compare-article'>
          <h1>{ this.props.submittedCity.name }</h1>
          { this.cityImageData() }
          <p className='score-quality-title'>Quality of Life Scores</p>
          { this.mappedCityScoreData() }
        </article>

        <article className='compare-article'>
          <h1>{ this.props.submittedCity2.name }</h1>
          { this.cityImageData2() }
          <p>Quality of Life Scores</p>
          { this.mappedCityScoreData2() }
        </article>
      </section>

      <article className='results'>
        <h5>{ this.props.submittedCity.name } <span>V.</span> { this.props.submittedCity2.name }</h5>
        <section>
          <span>{ this.mappedCityScoreData() }</span>
          <span> V. </span>
          <span>{ this.mappedCityScoreData2() }</span>
        </section>
      </article>
      </div>
    </div>
  )}
}

export default AppContainer(ComparePage);

//To do:
  //Set-up comparison card to show who has better (higher) scores over the other (show the higher score in green, the lower score in red)
