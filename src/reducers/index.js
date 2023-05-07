import { combineReducers } from 'redux';

import authReducer from './authReducer';
import candidateReducer from './candidateReducer';
import voteReducer from './voteReducer'

const reducers = combineReducers({
  auth: authReducer,
  details: candidateReducer,
  vote: voteReducer,
});

export default reducers;
