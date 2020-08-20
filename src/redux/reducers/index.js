import { combineReducers } from 'redux';
import userAvatar from './userAvatar';
import terminals from './terminals';
import buyers from './buyers';

const rootReducer = combineReducers({
  userAvatar,
  terminals,
  buyers
});

export default rootReducer;