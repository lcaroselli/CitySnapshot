export const fetchIsLoading = boolean => {
  return {
    type: 'FETCH_IS_LOADING',
    isLoading: boolean
  }
}

export const fetchSuccessful = data => {
  return {
    type: 'FETCH_SUCCESSFUL',
    data
  }
}

export const fetchError = boolean => {
  return {
    type: 'FETCH_ERROR',
    hasErred: boolean
  }
}

export const fetchData = url => {
  return dispatch => {
		dispatch(fetchIsLoading(true));

		fetch(url)
			.then(response => {
				if (response.status !== 200) {
					dispatch(fetchError(true));
				}

				dispatch(fetchIsLoading(false));

				return response;
			})
			.then(response => response.json())
			.then(parsedResponse =>
				dispatch(fetchSuccessful(parsedResponse.results))
			)
			.catch(() => dispatch(fetchError(true)));
	}
}
