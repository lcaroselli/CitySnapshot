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

    const { hasErred, isLoading, name } = this.props;

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
          <h1 className='city-page-name'>{ name }</h1>

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


//When a user selects a city from the city list page, this CityPage component renders

//As you scroll down, the aside highlights which section you are at...

//Add a search here - maybe can re-use component??

//Compare button should redirect to compare page with the first city already populated. Second city you choose from a list.
