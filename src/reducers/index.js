import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
import MediaReducer from './reducer-media';

const allReducers = combineReducers({
  user: UserReducer,
  medias: MediaReducer,
});

export default allReducers;
