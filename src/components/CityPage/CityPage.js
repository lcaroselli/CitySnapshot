import React from 'react';
import './CityPage.css';

const CityPage = () => {
  return (
    <div>
      <h1>Name of City</h1>
      <img src='' alt='Picture of city' />
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

//when a user selects a city from the search OR from the city list page, this CityPage component renders with corresponding City component
