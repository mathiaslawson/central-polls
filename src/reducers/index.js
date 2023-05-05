import { combineReducers } from 'redux';

import authReducer from './authReducer';
import candidateReducer from './candidateReducer';

const reducers = combineReducers({
  auth: authReducer,
  details: candidateReducer
});

export default reducers;
