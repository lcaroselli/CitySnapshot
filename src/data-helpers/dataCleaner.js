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
