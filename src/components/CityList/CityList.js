//MUST TAKE IN ALL OF CITY LIST DATA (just names) AND LINK TO CORRESPONDING CITY PAGE WITH CORRECT CITY COMPONENT DISPLAYING
import React from 'react';
import './CityList.css';
import cityList from '../../data-helpers/cityList';

const CityList = () => {
  let cityKeys = Object.keys(cityList)

  return (
    <div className='city-list'>
      <h1>City List</h1>
      
      <section className='city-list-container'>
      { cityKeys.map(city => {
        return (
          <button>{ city }</button>
        ) }) }
      </section>
    </div>
  )
}

export default CityList;

//onclick for buttons to direct to city page
