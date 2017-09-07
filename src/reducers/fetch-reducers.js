export const fetchLoading = (state = false, action) => {
  switch(action.type) {
    case 'FETCH_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export const fetchErred = (state = false, action) => {
  switch(action.type) {
    case 'FETCH_ERROR':
      return action.hasErred;

    default:
      return state;
  }
}

export const fetchSuccess = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_SUCCESSFUL':
      return action.data.map(city => {
        return Object.assign({}, city);
      })
      
    default:
      return state;
  }
}
