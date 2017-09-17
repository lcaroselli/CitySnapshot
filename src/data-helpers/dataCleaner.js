import React from 'react';

export const handleCityScoreDisplay = (data) => {
  return data.map(city => {
    return {
      name: city.name,
      score: city.score_out_of_10
    }
  })
}

export const handleCityDetailDisplay = (cityDetailData) => {
  return cityDetailData.map(city => {
    return {
      costOfLiving: {
        name: cityDetailData[3].label,
        type: cityDetailData[3].data.map(type => {
          return (
            <div>
              <p className='cost-of-living-label'>{ type.label }: <span className='cost-of-living-currency'>${ type.currency_dollar_value } </span></p>
            </div>
          )})
      },

      housing: {
        name: cityDetailData[8].label,
        type: cityDetailData[8].data.map(type => { return (
          <div>
            <p className='housing-label'>{ type.label }: <span className='housing-currency'>${ type.currency_dollar_value } </span></p>
          </div>
        )})
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
      }
    }
  })
}
