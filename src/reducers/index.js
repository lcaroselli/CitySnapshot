import { combineReducers } from 'redux';
import { fetchErred, fetchLoading, fetchDetailSuccess, fetchImageSuccess, fetchImageSuccess2, fetchScoreSuccess, fetchScoreSuccess2 } from './fetch-reducers';
import { submitCitySuccess, submitCitySuccess2 } from './search-reducers';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fetchErred,
  fetchLoading,
  fetchDetailSuccess,
  fetchScoreSuccess,
  fetchScoreSuccess2,
  fetchImageSuccess,
  fetchImageSuccess2,
  submitCitySuccess,
  submitCitySuccess2,
  routing: routerReducer
});

export default rootReducer;
