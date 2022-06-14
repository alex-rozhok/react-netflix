/* eslint-disable no-case-declarations */
import { IAppState } from '@types';
import {
  FILTER_MOVIE,
  CHANGE_GENRE,
  CHANGE_SORT,
  DELETE_MOVIE,
  CHANGE_MOVIES_DATA,
  SELECT_MOVIE,
} from './types';

export const reducer = (state: IAppState, action) => {
  switch (action.type) {
    case FILTER_MOVIE:
      const filteredMovies =
        action.payload === 'All'
          ? state.data
          : state.data.filter((movie) => movie.genres.includes(action.payload));
      return { ...state, movies: filteredMovies };
    case CHANGE_GENRE:
      const changedGenre = state.genres.map((genre) => {
        return genre.name === action.payload
          ? { ...genre, active: true }
          : { ...genre, active: false };
      });
      return { ...state, genres: changedGenre };
    case CHANGE_SORT:
      return { ...state, sort: action.payload };
    case DELETE_MOVIE:
      const newData = state.data.filter((el) => el.id !== action.payload.id);
      return { ...state, data: newData };
    case CHANGE_MOVIES_DATA:
      const found = state.data.findIndex((el) => el.id === action.payload.id);
      const changedMoviesData =
        found >= 0
          ? [
              ...state.data.slice(0, found),
              action.payload,
              ...state.data.slice(found + 1),
            ]
          : [action.payload, ...state.data];
      return { ...state, data: changedMoviesData };
    case SELECT_MOVIE:
      return { ...state, selectMovie: action.payload };
    default:
      return { ...state };
  }
};
