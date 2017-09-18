import { fetchErred, fetchLoading, fetchImageSuccess, fetchImageSuccess2,  fetchDetailSuccess, fetchScoreSuccess, fetchScoreSuccess2 } from './fetch-reducers';
import { submitCitySuccess, submitCitySuccess2 } from './search-reducers';

describe('fetch has erred reducer', () => {
  test ('should give me a default state', () => {
    const action = { type: '' };

    const expectedReturn = false;

    expect(fetchErred(undefined, action)).toEqual(expectedReturn);
  });

  test ('should give me a state of true when erred', () => {
    const action = {
      type: 'FETCH_ERROR',
      hasErred: true
    };

    const expectedReturn = true;

    expect(fetchErred(false, action)).toEqual(expectedReturn);
  });

  test ('should give me a state of false when successful', () => {
    const action = {
      type: 'FETCH_ERROR',
      hasErred: false
    };

    const expectedReturn = false;

    expect(fetchErred(false, action)).toEqual(expectedReturn);
  });
});


describe('fetch is loading reducer', () => {
  test ('should give me a default state', () => {
    const action = { type: '' };

    const expectedReturn = false;

    expect(fetchLoading(undefined, action)).toEqual(expectedReturn);
  });

  test ('should give me true for isLoading when fetch is loading', () => {
    const action = {
      type: 'FETCH_IS_LOADING',
      isLoading: true
    };

    const expectedReturn = true;

    expect(fetchLoading(false, action)).toEqual(expectedReturn);
  });
});




//THIS IS WHERE YOU STOPPED

describe('fetch image success reducer', () => {
  test ('should give me a default state', () => {
    const action = { type: '' };

    const expectedReturn = [];

    expect(fetchImageSuccess(undefined, action)).toEqual(expectedReturn);
  });

  test.skip ('should give me an image of the applicable city when successful', () => {
    const action = {
      type: 'FETCH_IMAGE_SUCCESSFUL',
    	data: []
    };

    const expectedReturn = { data: [] };

    expect(fetchImageSuccess(undefined, action)).toEqual(expectedReturn);
  });
});

describe('fetch image success comparison reducer', () => {
  test.skip ('should give me a default state', () => {
    const action = { type: '' };

    const expectedReturn = [];

    expect(fetchImageSuccess(undefined, action)).toEqual(expectedReturn);
  });
});

describe('fetch detail success reducer', () => {
  test.skip ('should give me a default state', () => {
    const action = { type: '' };

    const expectedReturn = [];

    expect(fetchImageSuccess(undefined, action)).toEqual(expectedReturn);
  });
});

describe('fetch score success reducer', () => {
  test.skip ('should give me a default state', () => {
    const action = { type: '' };

    const expectedReturn = [];

    expect(fetchImageSuccess(undefined, action)).toEqual(expectedReturn);
  });
});

describe('fetch score success comparison reducer', () => {
  test.skip ('should give me a default state', () => {
    const action = { type: '' };

    const expectedReturn = [];

    expect(fetchImageSuccess(undefined, action)).toEqual(expectedReturn);
  });
});

describe('submit city reducer', () => {
  test.skip ('should give me a default state', () => {
    const action = { type: '' };

    const expectedReturn = [];

    expect(fetchImageSuccess(undefined, action)).toEqual(expectedReturn);
  });
});

describe('submit city comparison reducer', () => {
  test.skip ('should give me a default state', () => {
    const action = { type: '' };

    const expectedReturn = [];

    expect(fetchImageSuccess(undefined, action)).toEqual(expectedReturn);
  });
});
