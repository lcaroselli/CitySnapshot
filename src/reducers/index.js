import { combineReducers } from 'redux';
import { fetchErred, fetchLoading, fetchDetailSuccess, fetchImageSuccess, fetchScoreSuccess } from './fetch-reducers';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fetchErred,
  fetchLoading,
  fetchDetailSuccess,
  fetchScoreSuccess,
  fetchImageSuccess,
  routing: routerReducer
});

export default rootReducer;
