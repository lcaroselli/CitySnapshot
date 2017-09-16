import React, { Component } from 'react';
import { VictoryBar, VictoryChart } from 'victory';
import { handleCityScoreDisplay, handleCityDetailDisplay } from '../../data-helpers/dataCleaner';
import AppContainer from '../../containers/AppContainer';
import './CityCard.css';

export class CityCard extends Component {

  cityImageData = () => {
    return this.props.cityImageData.map(city => ( <img className='city-image' src={ city.image.web }/> ))
  }

  mappedCityScoreData = () => {
    return handleCityScoreDisplay(this.props.cityScoreData).map(city => (
      <section>
        <p className='city-score'>{ city.name }: { city.score }</p>
      </section>
    ))
  }

  mappedCityDetailData = () => {
    const filteredData = handleCityDetailDisplay(this.props.cityDetailData).filter((el, i) => i === 0)

    return filteredData.map(city => (
      <div className='city-details'>
        <section className='cost-of-living'>
          <h3>{ city.costOfLiving.name }</h3>
          <p>{ city.costOfLiving.type }</p>
          <p>{ city.costOfLiving.typeData }</p>
        </section>

        <section className='housing'>
          <h3>{ city.housing.name }</h3>
          <p>{ city.housing.type }</p>
          <p>{ city.housing.typeData }</p>
        </section>

        <section className='unemployment'>
          <h3>Unemployment Rate</h3>
          <p>{ city.unemployment.typeData }</p>
        </section>

        <section className='economy'>
          <h3>{ city.economy.name }</h3>
          <p>{ city.economy.type }</p>
          <p>{ city.economy.typeData }</p>
        </section>

        <section className='job-market'>
          <h3>{ city.jobMarket.name }</h3>
          <p>{ city.jobMarket.type }</p>
          <p>{ city.jobMarket.typeData }</p>
          <p>{ city.jobMarket.type2 }</p>
          <p>{ city.jobMarket.typeData2 }</p>
          <p>{ city.jobMarket.type3 }</p>
          <p>{ city.jobMarket.typeData3 }</p>
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
      <section>
        { this.cityImageData() }
      </section>

      <section id='score-data' className='score-data'>
        <h3>City Scores</h3>
          { this.mappedCityScoreData() }
        <section className='charts'>
          <VictoryChart
          domainPadding={40}>
            <VictoryBar
            data={cleanedData}
            x='name'
            y='score' />
          </VictoryChart>
        </section>
      </section>

      <section id='detail-data' className='detail-data'>
       { this.mappedCityDetailData() }
      </section>
    </div>
  )}
}

export default AppContainer(CityCard);
