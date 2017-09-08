import React from 'react';
import './Search.css';

const Search = () => {

  // const trie = new Trie();
  // trie.populate(Citylist);

  // cityCostAndQualityInfo() {
  // 	this.props.fetchData(
  // 		`https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/`
  // 	);
  // }

  //CITY IMAGES
  // https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/images/


  return (
    <div className='search-wrapper'>
      <p className='search-text'>A cost-of-living comparison tool & more</p>
      <input placeholder='Search for a City' type='search' />
    </div>
  )
}

export default Search;


//when a user selects a city from the search OR from the city list page, this CityPage component renders with corresponding City component
