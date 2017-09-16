export const submitCitySuccess = (state = '', action) => {
  switch(action.type) {
    case 'SUBMIT_CITY': {
      return action.city;
    }

    default:
      return state;
    }
}
