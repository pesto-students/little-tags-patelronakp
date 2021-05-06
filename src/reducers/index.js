import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import userCartReducer from './userCartReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userCartState: userCartReducer,
});

export default rootReducer;