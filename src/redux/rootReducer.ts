import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { moviesReducer } from './moviesReducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  app: appReducer,
});
