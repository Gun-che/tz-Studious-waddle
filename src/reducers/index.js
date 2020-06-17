import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { profileReducer } from './profileReducer';
import { newsReducer } from './newsReducer';
import { peopleReducer } from './peopleReducer'


export const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  news: newsReducer,
  people: peopleReducer,
}) 