import React, { Component } from 'react';
import AppContainer from '../../containers/AppContainer';
import { HashLink as Link } from 'react-router-hash-link';
import './CityPage.css';

export class CityPage extends Component {
  componentDidMount() {
    this.cityScores();
    this.cityDetails();
    this.cityImage();
  }

  cityScores() {
  	this.props.fetchScoreData(
  		`https://api.teleport.org/api/urban_areas/slug:san-diego/scores/`
  	);
  }

  cityDetails() {
    this.props.fetchDetailData(
  		`https://api.teleport.org/api/urban_areas/slug:san-diego/details/`
  	);
  }

  cityImage() {
    this.props.fetchImageData(
  		`https://api.teleport.org/api/urban_areas/slug:san-diego/images/`
  	);
  }

  handleCityScoreDisplay() {
		const { cityScoreData } = this.props;

    return cityScoreData.map(city => {
      return {
        name: city.name,
        score: city.score_out_of_10
      }
    })
  }

  handleCityDetailDisplay() {
    const { cityDetailData } = this.props;

    return cityDetailData.map(city => {
      return {
        costOfLiving: {
          name: cityDetailData[3].label,
          type: cityDetailData[3].data.map(type => { return type.label }),
          typeData: cityDetailData[3].data.map(type => { return type.currency_dollar_value })
        },

        housing: {
          name: cityDetailData[8].label,
          type: cityDetailData[8].data.map(type => { return type.label }),
          typeData: cityDetailData[8].data.map(type => { return type.currency_dollar_value })
        },

        unemployment: {
          name: cityDetailData[9].label,
          type: cityDetailData[9].data[3].label,
          typeData: cityDetailData[9].data[3].percent_value
        },

        economy: {
          name: cityDetailData[5].label,
          type: cityDetailData[5].data[2].label,
          typeData: cityDetailData[5].data[2].percent_value
        },

        jobMarket:{
          name: cityDetailData[10].label,
          type: cityDetailData[10].data[3].label,
          typeData: cityDetailData[10].data[3].int_value,
          type2: cityDetailData[10].data[4].label,
          typeData2: cityDetailData[10].data[4].float_value,
          type3: cityDetailData[10].data[5].label,
          typeData3: cityDetailData[10].data[5].float_value
        }
      }
    })
  }


  render() {
    const { hasErred, isLoading } = this.props;

    if(isLoading) {
      return <p>Loading...</p>
    }

    if(hasErred) {
      return <p>Error...</p>
    }

    const cityImageData = this.props.cityImageData.map(city => (
        <img className='city-image' src={city.image.web}/> ));

    const mappedCityScoreData = this.handleCityScoreDisplay().map(city => (
      <section className='city-score-wrapper'>
        <p className='city-score'>{ city.name }: { city.score }</p>
      </section> ));

    const mappedCityDetailData = this.handleCityDetailDisplay().map(city => (
      <div className='city-details'>
        <section className='cost-of-living' id='cost-of-living-2'>
          <h3>{ city.costOfLiving.name }</h3>
          <p>{ city.costOfLiving.type }</p>
          <p>{ city.costOfLiving.typeData }</p>
        </section>

        <section className='housing' id='housing-2'>
          <h3>{ city.housing.name }</h3>
          <p>{ city.housing.type }</p>
          <p>{ city.housing.typeData }</p>
        </section>

        <section className='unemployment' id='unemployment-2'>
          <h3>Unemployment Rate</h3>
          <p>{ city.unemployment.typeData }</p>
        </section>

        <section className='economy' id='economy-2'>
          <h3>{ city.economy.name }</h3>
          <p>{ city.economy.type }</p>
          <p>{ city.economy.typeData }</p>
        </section>

        <section className='job-market' id='job-market-2'>
          <h3>{ city.jobMarket .name}</h3>
          <p>{ city.jobMarket.type }</p>
          <p>{ city.jobMarket.typeData }</p>
          <p>{ city.jobMarket.type2 }</p>
          <p>{ city.jobMarket.typeData2 }</p>
          <p>{ city.jobMarket.type3 }</p>
          <p>{ city.jobMarket.typeData3 }</p>
        </section>
      </div> ));


   return (
      <div className='city-page'>
        <header>
          <h1 className='city-page-name'>Name of City</h1>
          <button className='compare-city-button'>Compare City</button>
        </header>

        <section className='main'>
          <nav className='city-page-nav'>
            <Link to='#score-data-2'>City Scores</Link>
            <Link to='#cost-of-living-2'>Cost of Living</Link>
            <Link to='#housing-2'>Housing Costs</Link>
            <Link to='#unemployment-2'>Unemployment Rate</Link>
            <Link to='#economy-2'>Economy</Link>
            <Link to='#job-market-2'>Job Market</Link>
          </nav>

          <section className='all-data'>
            <section>{ cityImageData }</section>
            <section id='score-data-2' className='score-data'>
            <h3>City Scores</h3>
            { mappedCityScoreData }</section>
            <section id='detail-data-2' className='detail-data'>{ mappedCityDetailData[0] }</section>
          </section>
        </section>
      </div>
    )
  }
}

export default AppContainer(CityPage);


//Things to figure out:
  //How to grab the submitted search query and plug that in as the slug city on this page with the fecth actions
  //Should I store that city in the store somewhere and then just grab that data from the store?


//when a user selects a city from the search OR from the city list page, this CityPage component renders with corresponding City component


//button onclicks to jump to that specific part of the page, as you scroll down, the aside highlights which section you are at...
