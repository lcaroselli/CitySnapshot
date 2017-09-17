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

export const fetchImageSuccess = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_IMAGE_SUCCESSFUL':
      return action.data.photos.map(image => {
        return Object.assign({}, image);
      })

    default:
      return state;
  }
}

export const fetchDetailSuccess = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_DETAIL_SUCCESSFUL':
      return action.data.categories.map(image => {
        return Object.assign({}, image);
      })

    default:
      return state;
  }
}

export const fetchScoreSuccess = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_SCORE_SUCCESSFUL':
      return action.data.categories.map(image => {
        return Object.assign({}, image);
      })

    default:
      return state;
  }
}

export const fetchScoreSuccess2 = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_SCORE_SUCCESSFUL_2':
      return action.data.categories.map(image => {
        return Object.assign({}, image);
      })

    default:
      return state;
  }
}

export const fetchImageSuccess2 = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_IMAGE_SUCCESSFUL_2':
      return action.data.photos.map(image => {
        return Object.assign({}, image);
      })

    default:
      return state;
  }
}
