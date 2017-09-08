import * as actions from './index.js';

describe('actions', () => {
  test.skip('should create an action to detect if fetching data was successful', () => {
    const data = data
    const expectedAction = {
      type: 'FETCH_SUCCESSFUL',
      data
    }
    expect(actions.fetchSuccessful(data)).toEqual(expectedAction);
  })

  test.skip('should create an action to detect if fetching data was unsuccessful', () => {
    const boolean = boolean
    const expectedAction = {
      type: 'FETCH_ERROR',
      hasErred: boolean
    }
    expect(actions.fetchError(boolean)).toEqual(expectedAction);
  })

  test.skip('should create an action to detect if the fetch is loading', () => {
    const boolean = boolean
    const expectedAction = {
      type: 'FETCH_IS_LOADING',
      isLoading: boolean
    }
    expect(actions.fetchIsLoading(boolean)).toEqual(expectedAction);
  })
})
