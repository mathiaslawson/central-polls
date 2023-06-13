import { combineReducers } from 'redux';

import authReducer from './authReducer';
import candidateReducer from './candidateReducer';
import voteReducer from './voteReducer'
import ClosePositionReducer from './closePositionReducer';
import confirmedEmail from './confirmedEmail';

const reducers = combineReducers({
  auth: authReducer,
  details: candidateReducer,
  vote: voteReducer,
  closePosition: ClosePositionReducer,
  confirmedEmail: confirmedEmail,
});

export default reducers;
