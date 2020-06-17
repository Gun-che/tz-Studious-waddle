import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { profileReducer } from './profileReducer';
import { newsReducer } from './newsReducer';


export const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  news: newsReducer,
}) 