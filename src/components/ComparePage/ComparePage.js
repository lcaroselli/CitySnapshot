import React from 'react';
import AppContainer from '../../containers/AppContainer';
import './ComparePage.css';


const ComparePage = ({ submittedCity }) => {

  return (
    <div className='compare-wrapper'>
      <h1>Compare Cities</h1>
      <section className='compare-cities'>
        <article className='compare-article'>
          <h1>{ submittedCity }</h1>
          <p>City 1 Scores</p>
        </article>

        <article className='compare-article'>
          <h1>City 2</h1>
          <p>City 2 Scores</p>
        </article>

      </section>

      <article className='results'>Chart/Visualization of results when compared to each other - who comes out on top in different categories</article>
    </div>
  )
}

export default AppContainer(ComparePage);

//To do:
//Pass down the searched city's data as well -- this is luckily already in store
//Set-up city 2's card and grab it's data
//Set-up comparison card to show who has better (higher) scores over the other (show the higher score in green, the lower score in red)
