import { combineReducers } from 'redux';
import { ratesList } from './ratesList';

const rootReducer =  combineReducers({
  ratesList: ratesList
});

export { rootReducer };
