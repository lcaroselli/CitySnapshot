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
