import React, { Component } from 'react';
import AppContainer from '../../containers/AppContainer';
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
        <section>
          <h3>{ city.costOfLiving.name }</h3>
          <p>{ city.costOfLiving.type }</p>
          <p>{ city.costOfLiving.typeData }</p>
        </section>

        <section>
          <h3>{ city.housing.name }</h3>
          <p>{ city.housing.type }</p>
          <p>{ city.housing.typeData }</p>
        </section>

        <section>
          <h3>Unemployment Rate</h3>
          <p>{ city.unemployment.typeData }</p>
        </section>

        <section>
          <h3>{ city.economy.name }</h3>
          <p>{ city.economy.type }</p>
          <p>{ city.economy.typeData }</p>
        </section>

        <section>
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
        <h1 className='city-page-name'>Name of City</h1>
        <button className='compare-city-button'>Compare City</button>
        <nav className='city-page-nav'>
          <button>Cost of Living</button>
          <button>Housing Costs</button>
          <button>City Scores</button>
          <button>Unemployment Rate</button>
          <button>Economy</button>
          <button>Job Market</button>
        </nav>
        <section>{ cityImageData }</section>
        <section className='score-data'>
        <h3>City Scores</h3>
        { mappedCityScoreData }</section>
        <section className='detail-data'>{ mappedCityDetailData[0] }</section>
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
