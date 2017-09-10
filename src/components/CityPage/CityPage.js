import React, { Component } from 'react';
import AppContainer from '../../containers/AppContainer';
import './CityPage.css';

export class CityPage extends Component {
  componentDidMount() {
    this.cityScores();
    // this.cityDetails();
    // this.cityImage();
  }

  cityScores() {
  	this.props.fetchData(
  		`https://api.teleport.org/api/urban_areas/slug:san-diego/scores/`
  	);
  }

  // cityDetails() {
  //   this.props.fetchData(
  // 		`https://api.teleport.org/api/urban_areas/slug:san-diego/details/`
  // 	);
  // }

  // cityImage() {
  //   this.props.fetchData(
  // 		`https://api.teleport.org/api/urban_areas/slug:${ this.state.city }/images/`
  // 	);
  // }

  render() {

    return (
      <div>
        <h1>Name of City</h1>
        <img src='' alt='city' />
        <button>Compare City</button>
        <nav>
          <button>Cost of Living</button>
          <button>City Rank</button>
          <button>Rent Score</button>
          <button>Housing Costs</button>
          <button>Purchasing Power</button>
        </nav>
      </div>
    )
  }
}

export default AppContainer(CityPage);


//Things to figure out:
  //How to grab the submitted search query and plug that in as the slug city on this page with the fecth actions
  //Should I store that city in the store somewhere and then just grab that data from the store?


//when a user selects a city from the search OR from the city list page, this CityPage component renders with corresponding City component
