import * as actions from './index.js';

describe('actions', () => {
  test ('should create an action to detect if fetching detailed city data was successful', () => {
    const data = {}
    const expectedAction = {
      type: 'FETCH_DETAIL_SUCCESSFUL',
      data
    }
    expect(actions.fetchDetailSuccessful(data)).toEqual(expectedAction);
  });

  test ('should create an action to detect if fetching score data was successful', () => {
    const data = {}
    const expectedAction = {
      type: 'FETCH_SCORE_SUCCESSFUL',
      data
    }
    expect(actions.fetchScoreSuccessful(data)).toEqual(expectedAction);
  });

  test ('should create an action to detect if fetching score data for comparison was successful', () => {
    const data = {}
    const expectedAction = {
      type: 'FETCH_SCORE_SUCCESSFUL_2',
      data
    }
    expect(actions.fetchScoreSuccessful2(data)).toEqual(expectedAction);
  });

  test ('should create an action to detect if fetching image data was successful', () => {
    const data = {}
    const expectedAction = {
      type: 'FETCH_IMAGE_SUCCESSFUL',
      data
    }
    expect(actions.fetchImageSuccessful(data)).toEqual(expectedAction);
  });

  test ('should create an action to detect if fetching image data for comparison was successful', () => {
    const data = {}
    const expectedAction = {
      type: 'FETCH_IMAGE_SUCCESSFUL_2',
      data
    }
    expect(actions.fetchImageSuccessful2(data)).toEqual(expectedAction);
  });

  test ('should create an action to detect if fetching data was unsuccessful', () => {
    const boolean = true
    const expectedAction = {
      type: 'FETCH_ERROR',
      hasErred: boolean
    }
    expect(actions.fetchError(boolean)).toEqual(expectedAction);
  });

  test ('should create an action to detect if the fetch is loading', () => {
    const boolean = true
    const expectedAction = {
      type: 'FETCH_IS_LOADING',
      isLoading: boolean
    }
    expect(actions.fetchIsLoading(boolean)).toEqual(expectedAction);
  });

  test ('should create an action to detect if a city was submitted', () => {
    const city = ''
    const name = ''
    const expectedAction = {
      type: 'SUBMIT_CITY',
      city,
      name
    }
    expect(actions.submitCity(city, name)).toEqual(expectedAction);
  });

  test ('should create an action to detect if a compared city was submitted', () => {
    const city = ''
    const name = ''
    const expectedAction = {
      type: 'SUBMIT_CITY_2',
      city,
      name
    }
    expect(actions.submitCity2(city, name)).toEqual(expectedAction);
  });

  test ('should create an action to fetch summary data', () => {
    const data = ''
    const expectedAction = {
      type: 'FETCH_SUMMARY',
      data
    }
    expect(actions.fetchSummarySuccessful(data)).toEqual(expectedAction);
  });
});
