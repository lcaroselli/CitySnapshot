import React, { Component } from 'react';
import CityCard from '../CityCard/CityCard';
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
  		`https://api.teleport.org/api/urban_areas/slug:${ this.props.city }/scores/`
  	);
  }

  cityDetails() {
    this.props.fetchDetailData(
  		`https://api.teleport.org/api/urban_areas/slug:${ this.props.city }/details/`
  	);
  }

  cityImage() {
    this.props.fetchImageData(
  		`https://api.teleport.org/api/urban_areas/slug:${ this.props.city }/images/`
  	);
  }

  render() {

    const { hasErred, isLoading } = this.props;

    if(isLoading) {
      return <p>Loading...</p>
    }

    if(hasErred) {
      return <p>Error...</p>
    }

      return (
      <div className='city-page'>
        <header>
          <h1 className='city-page-name'>{ this.props.name }</h1>
          <button className='compare-city-button'>Compare City</button>
        </header>

        <section className='main'>
          <nav className='city-page-nav'>
            <Link to='#score-data'>City Scores</Link>
            <Link to='#cost-of-living'>Cost of Living</Link>
            <Link to='#housing'>Housing Costs</Link>
            <Link to='#unemployment'>Unemployment Rate</Link>
            <Link to='#economy'>Economy</Link>
            <Link to='#job-market'>Job Market</Link>
          </nav>

          <section className='all-data'>
            <CityCard />
          </section>
        </section>
      </div>
    )
  }
}


export default AppContainer(CityPage);


//When a user selects a city from the city list page, this CityPage component renders

//As you scroll down, the aside highlights which section you are at...

//Add a search here - maybe can re-use component??

//Compare button should redirect to compare page with the first city already populated. Second city you choose from a list.
