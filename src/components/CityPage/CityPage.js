import React, { Component } from 'react';
import CityCard from '../CityCard/CityCard';
import Search from '../Search/Search';
import ComparePage from '../ComparePage/ComparePage';
import AppContainer from '../../containers/AppContainer';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './CityPage.css';

export class CityPage extends Component {
  componentDidMount() {
    this.cityScores();
    this.cityDetails();
    this.cityImage();
  }

  cityScores() {
  	this.props.fetchScoreData(
  		`https://api.teleport.org/api/urban_areas/slug:${ this.props.submittedCity.city }/scores/`
  	);
  }

  cityDetails() {
    this.props.fetchDetailData(
  		`https://api.teleport.org/api/urban_areas/slug:${ this.props.submittedCity.city }/details/`
  	);
  }

  cityImage() {
    this.props.fetchImageData(
  		`https://api.teleport.org/api/urban_areas/slug:${ this.props.submittedCity.city }/images/`
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
        <Search />
        <header>
          <h1 className='city-page-name'>{ this.props.submittedCity.name }</h1>

          <Link exact to='/compare' component={ ComparePage } className='compare-city-button'>Compare City</Link>
        </header>

        <section className='main'>
          <nav className='city-page-nav'>
            <HashLink to='#score-data'>City Scores</HashLink>
            <HashLink to='#cost-of-living'>Cost of Living</HashLink>
            <HashLink to='#housing'>Housing Costs</HashLink>
            <HashLink to='#unemployment'>Unemployment Rate</HashLink>
            <HashLink to='#economy'>Economy</HashLink>
            <HashLink to='#job-market'>Job Market</HashLink>
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


//As you scroll down, the aside highlights which section you are at
//Compare button to be a dropdown city list
