import React from 'react';
import './CityList.css';
import cityList from '../../data-helpers/cityList';

const CityList = ({ history }) => {
  let cityKeys = Object.keys(cityList)

  return (
    <div className='city-list'>
      <h1>City List</h1>

      <section className='city-list-container'>
      { cityKeys.map(city => {
        return (
          <button onClick={() => history.push('/citypage')}>{ city }</button>
        ) }) }
      </section>
    </div>
  )
}

export default CityList;

//onclick for buttons redirect to city page with props -- FIRST STEP IS TO GET CITYPAGE AN ACTUAL PATH
