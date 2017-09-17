export const submitCitySuccess = (state = '', action) => {
  switch(action.type) {
    case 'SUBMIT_CITY': {
      return {
        city: action.city,
        name: action.name
      }
    }

    default:
      return state;
    }
}

export const submitCitySuccess2 = (state = '', action) => {
  switch(action.type) {
    case 'SUBMIT_CITY_2': {
      return {
        city: action.city,
        name: action.name
      }
    }

    default:
      return state;
    }
}
