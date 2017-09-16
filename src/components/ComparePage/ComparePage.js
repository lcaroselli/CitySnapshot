import React, { Component } from 'react';
import AppContainer from '../../containers/AppContainer';
import CityCard from '../CityCard/CityCard'
import './ComparePage.css';
import { handleCityScoreDisplay } from '../../data-helpers/dataCleaner';


export class ComparePage extends Component {

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

  render() {

  return (
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
          <h1>City 2</h1>
          <p>City 2 Scores</p>
        </article>

      </section>

      <article className='results'>Chart/Visualization of results when compared to each other - who comes out on top in different categories</article>
    </div>
  )
}
  }

export default AppContainer(ComparePage);

//To do:
//Pass down the searched city's data as well -- this is luckily already in store
//Set-up city 2's card and grab it's data
//Set-up comparison card to show who has better (higher) scores over the other (show the higher score in green, the lower score in red)
