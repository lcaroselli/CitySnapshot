import { combineReducers } from 'redux';
import { fetchErred, fetchLoading, fetchDetailSuccess, fetchImageSuccess, fetchScoreSuccess } from './fetch-reducers';
import { submitCitySuccess } from './search-reducers';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fetchErred,
  fetchLoading,
  fetchDetailSuccess,
  fetchScoreSuccess,
  fetchImageSuccess,
  submitCitySuccess,
  routing: routerReducer
});

export default rootReducer;
