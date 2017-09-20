import React, { Component } from 'react';
import AppContainer from '../../containers/AppContainer';
import './ComparePage.css';
import { handleCityScoreDisplay } from '../../data-helpers/dataCleaner';
import cityList from '../../data-helpers/cityList';


export class ComparePage extends Component {
  constructor() {
    super();
    this.state={
      input: '',
      cities: Object.keys(cityList),
      filteredCities: []
    };
  }

  comparedCityScores(city) {
    this.props.fetchScoreData2(
      `https://api.teleport.org/api/urban_areas/slug:${city}/scores/`
    );
  }

  comparedCityImage(city) {
    this.props.fetchImageData2(
      `https://api.teleport.org/api/urban_areas/slug:${city}/images/`
    );
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
    const filteredKey = this.state.cities.filter(el => el === e.target.innerHTML)

    const filteredCityList = cityList[filteredKey]

    this.props.submitCity2(filteredCityList, filteredKey);

    this.comparedCityScores(filteredCityList);
    this.comparedCityImage(filteredCityList);

    this.setState({
      input: e.target.innerHTML
    })
  }

  handleEnter(e) {
    e.preventDefault();
  }

  mappedCityScoreData(cityData) {
    return handleCityScoreDisplay(cityData).map(city => (
      <section>
        <p className='scored'>{ city.name }: <span>{ Math.round(city.score) }</span></p>
      </section>
    ))
  }

  cityImageData(imageData) {
    return imageData.map(city => ( <img className='city-image' src={ city.image.web }/> ))
  }

  render() {
    const cityDisplay = this.state.input ? "filtered-cities-compare" : "hidden";

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
          { this.cityImageData(this.props.cityImageData) }
          <p className='score-quality-title'>Quality of Life Scores</p>
          { this.mappedCityScoreData(this.props.cityScoreData) }
        </article>

        <article className='compare-article'>
          <h1>{ this.props.submittedCity2.name }</h1>
          { this.cityImageData(this.props.cityImageData2) }
          <p>Quality of Life Scores</p>
          { this.mappedCityScoreData(this.props.cityScoreData2) }
        </article>
      </section>
      </div>

      { this.props.submittedCity2.name &&
      <article className='results'>
        <section>
          <span className='city-1-span'>
            <h5>{ this.props.submittedCity.name }</h5>
            { this.mappedCityScoreData(this.props.cityScoreData) }
          </span>

          <span>
            <h5>{ this.props.submittedCity2.name }</h5>
            { this.mappedCityScoreData(this.props.cityScoreData2) }
          </span>
        </section>
      </article>
      }
    </div>
  )}
}

export default AppContainer(ComparePage);
