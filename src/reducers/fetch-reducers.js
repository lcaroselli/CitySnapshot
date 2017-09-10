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

// export const fetchSuccess = (state = [], action) => {
//   switch(action.type) {
//     case 'FETCH_SUCCESSFUL':
//       return action.data.categories.map(city => {
//         return Object.assign({}, city);
//       })
//
//     default:
//       return state;
//   }
// }

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
