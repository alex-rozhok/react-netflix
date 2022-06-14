/* eslint-disable no-case-declarations */
import {
  FILTER_MOVIE,
  CHANGE_GENRE,
  CHANGE_SORT,
  DELETE_MOVIE,
  CHANGE_MOVIES_DATA,
} from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case FILTER_MOVIE:
      return { ...state, movies: action.payload };
    case CHANGE_GENRE:
      return { ...state, genres: action.payload };
    case CHANGE_SORT:
      return { ...state, sort: action.payload };
    case DELETE_MOVIE:
      const newData = state.data.filter((el) => el.id !== action.payload);
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
    default:
      return { ...state };
  }
};
