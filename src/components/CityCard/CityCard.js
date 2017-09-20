import React, { Component } from 'react';
import { VictoryBar, VictoryChart } from 'victory';
import { handleCityScoreDisplay, handleCityDetailDisplay } from '../../data-helpers/dataCleaner';
import AppContainer from '../../containers/AppContainer';
import './CityCard.css';
import colIcon from '../../assets/dollar-bill.svg';
import homeIcon from '../../assets/home.svg';
import worldIcon from '../../assets/grid-world.svg';

export class CityCard extends Component {

  cityImageData() {
    return this.props.cityImageData.map(city => ( <img className='city-image' src={ city.image.web }/> ))
  }

  citySummaryData() {
    return (
      <p>{ this.props.summaryData }</p>
    )
  }

  mappedCityScoreData() {
    return handleCityScoreDisplay(this.props.cityScoreData).map(city => (
      <section>
        <p className='city-score'>{ city.name }: <span>{ Math.round(city.score) }</span></p>
      </section>
    ))
  }

  mappedCityDetailData() {
    const filteredData = handleCityDetailDisplay(this.props.cityDetailData).filter((el, i) => i === 0)

    return filteredData.map(city => (
      <div className='city-details'>
        <section className='cost-of-living' id='cost-of-living'>
          <h3>{ city.costOfLiving.name } <img src={ colIcon } alt='cost of living icon'/></h3>
          <h6>Cost-of-living data represents the average daily cost of everyday items, such as bread, movie tickets, and meals at a restaurant.</h6>
          <p>{ city.costOfLiving.type }</p>
        </section>

        <section className='housing' id='housing'>
          <h3>{ city.housing.name } <img src={ homeIcon } alt='housing icon'/></h3>
          <h6>Housing data represents the average monthly cost of rent in a city for small, medium, and large-sized apartments.</h6>
          <p>{ city.housing.type }</p>
        </section>

        <section className='unemployment' id='unemployment'>
          <h3>Economy <img src={ worldIcon } alt='economy icon'/></h3>
          <h6>Economic data represents the unemployment rate and GDP of a city.</h6>
          <p>Unemployment Rate: { city.unemployment.typeData }%</p>
          <p>{ city.economy.type }: { city.economy.typeData }%</p>
        </section>
      </div>
    ))
  }

render() {
  const cleanedData = handleCityScoreDisplay(this.props.cityScoreData).map(city => {
    return {
    name: city.name,
    score: city.score
  }})

  return (
    <div>
      <section className='header-image'>
        { this.cityImageData() }
      </section>

      <section>
      <h3 className='city-scores-header'>Quality of Life Scores <p>Out of 10</p></h3>
      <section className='summary-data'>
      { this.citySummaryData() }
      <p className='summary-p'>These scores represent the quality of life in the listed city, where a higher score represents a higher standard for that area, where '10' is the ideal, and '0' represents the lowest quality in that category.</p>
      </section>
      <section id='score-data' className='score-data'>
        <section className='city-scores-all'>{ this.mappedCityScoreData() }</section>
        <section className='charts'>
          <VictoryChart
          padding={{ left: 200, right: 0 }}
          domainPadding={20}>
            <VictoryBar horizontal
            style={{ data: { fill: "#C43A31" } }}
            data={ cleanedData }
            x='name'
            y='score' />
          </VictoryChart>
        </section>
      </section>
      </section>

      <section id='detail-data' className='detail-data'>
       { this.mappedCityDetailData() }
      </section>
    </div>
  )}
}

export default AppContainer(CityCard);
