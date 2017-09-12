import React from 'react';

const handleCityScoreDisplay = (data) => {
  return data.map(city => {
    return {
      name: city.name,
      score: city.score_out_of_10
    }
  })
}

const handleCityDetailDisplay = (cityDetailData) => {
  return cityDetailData.map(city => {
    return {
      costOfLiving: {
        name: cityDetailData[3].label,
        type: cityDetailData[3].data.map(type => { return type.label }),
        typeData: cityDetailData[3].data.map(type => { return type.currency_dollar_value })
      },

      housing: {
        name: cityDetailData[8].label,
        type: cityDetailData[8].data.map(type => { return type.label }),
        typeData: cityDetailData[8].data.map(type => { return type.currency_dollar_value })
      },

      unemployment: {
        name: cityDetailData[9].label,
        type: cityDetailData[9].data[3].label,
        typeData: cityDetailData[9].data[3].percent_value
      },

      economy: {
        name: cityDetailData[5].label,
        type: cityDetailData[5].data[2].label,
        typeData: cityDetailData[5].data[2].percent_value
      },

      jobMarket:{
        name: cityDetailData[10].label,
        type: cityDetailData[10].data[3].label,
        typeData: cityDetailData[10].data[3].int_value,
        type2: cityDetailData[10].data[4].label,
        typeData2: cityDetailData[10].data[4].float_value,
        type3: cityDetailData[10].data[5].label,
        typeData3: cityDetailData[10].data[5].float_value
      }
    }
  })
}

export const cityImageData = () => { this.props.cityImageData.map(city => (
    <img className='city-image' src={ city.image.web }/> ))
  }

export const mappedCityScoreData = (data) => { handleCityScoreDisplay(data).map(city => (
  <section className='city-score-wrapper'>
    <p className='city-score'>{ city.name }: { city.score }</p>
  </section> ))
}

export const mappedCityDetailData = (data) => {
  handleCityDetailDisplay(data).map ( city => (
  <div className='city-details'>
    <section className='cost-of-living' id='cost-of-living'>
      <h3>{ city.costOfLiving.name }</h3>
      <p>{ city.costOfLiving.type }</p>
      <p>{ city.costOfLiving.typeData }</p>
    </section>

    <section className='housing' id='housing'>
      <h3>{ city.housing.name }</h3>
      <p>{ city.housing.type }</p>
      <p>{ city.housing.typeData }</p>
    </section>

    <section className='unemployment' id='unemployment'>
      <h3>Unemployment Rate</h3>
      <p>{ city.unemployment.typeData }</p>
    </section>

    <section className='economy' id='economy'>
      <h3>{ city.economy.name }</h3>
      <p>{ city.economy.type }</p>
      <p>{ city.economy.typeData }</p>
    </section>

    <section className='job-market' id='job-market'>
      <h3>{ city.jobMarket .name}</h3>
      <p>{ city.jobMarket.type }</p>
      <p>{ city.jobMarket.typeData }</p>
      <p>{ city.jobMarket.type2 }</p>
      <p>{ city.jobMarket.typeData2 }</p>
      <p>{ city.jobMarket.type3 }</p>
      <p>{ city.jobMarket.typeData3 }</p>
    </section>
  </div> ))
}
