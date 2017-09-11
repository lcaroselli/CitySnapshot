export const fetchIsLoading = boolean => {
  return {
    type: 'FETCH_IS_LOADING',
    isLoading: boolean
  }
}

export const fetchDetailSuccessful = data => {
  return {
    type: 'FETCH_DETAIL_SUCCESSFUL',
    data
  }
}

export const fetchScoreSuccessful = data => {
  return {
    type: 'FETCH_SCORE_SUCCESSFUL',
    data
  }
}

export const fetchImageSuccessful = data => {
  return {
    type: 'FETCH_IMAGE_SUCCESSFUL',
    data
  }
}

export const fetchError = boolean => {
  return {
    type: 'FETCH_ERROR',
    hasErred: boolean
  }
}

export const fetchScoreData = url => {
  return dispatch => {
		dispatch(fetchIsLoading(true));
		fetch(url)
			.then(response => {
				if (response.status !== 200) {
					dispatch(fetchError(true));
				} else {
            dispatch(fetchIsLoading(false));
				    return response;
         }
			})
			.then(response => response.json())
      .then(parsedResponse => dispatch(fetchScoreSuccessful(parsedResponse)))
			.catch(() => dispatch(fetchError(true)));
	}
}

export const fetchDetailData = url => {
  return dispatch => {
		dispatch(fetchIsLoading(true));
		fetch(url)
			.then(response => {
				if (response.status !== 200) {
					dispatch(fetchError(true));
				} else {
            dispatch(fetchIsLoading(false));
				    return response;
         }
			})
			.then(response => response.json())
      .then(parsedResponse => dispatch(fetchDetailSuccessful(parsedResponse)))
			.catch(() => dispatch(fetchError(true)));
	}
}

export const fetchImageData = url => {
  return dispatch => {
		dispatch(fetchIsLoading(true));
		fetch(url)
			.then(response => {
				if (response.status !== 200) {
					dispatch(fetchError(true));
				} else {
            dispatch(fetchIsLoading(false));
				    return response;
         }
			})
			.then(response => response.json())
      .then(parsedResponse => dispatch(fetchImageSuccessful(parsedResponse)))
			.catch(() => dispatch(fetchError(true)));
	}
}
