import React from 'react';
import AppContainer from '../../containers/AppContainer';
import './ComparePage.css';


const ComparePage = ({ city }) => {

  return (
    <div className='compare-wrapper'>
      <h1>Compare Cities</h1>
      <section className='compare-cities'>
        <article className='compare-article'>
          <h1>{ city }</h1>
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
