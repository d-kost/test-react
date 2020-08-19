import { combineReducers } from 'redux';
import userAvatar from './userAvatar';
import terminals from './terminals';

const rootReducer = combineReducers({
  userAvatar,
  terminals
});

export default rootReducer;