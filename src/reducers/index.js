import { combineReducers } from 'redux';
import { fetchErred, fetchLoading, fetchSuccess } from './fetch-reducers';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fetchErred,
  fetchLoading,
  fetchSuccess,
  routing: routerReducer
});

export default rootReducer;
