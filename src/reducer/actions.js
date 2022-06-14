import {
  FILTER_MOVIE,
  CHANGE_GENRE,
  CHANGE_SORT,
  DELETE_MOVIE,
  CHANGE_MOVIES_DATA,
} from './types';

export const moviesAction = (payload) => {
  return {
    type: FILTER_MOVIE,
    payload,
  };
};

export const genresAction = (payload) => {
  return {
    type: CHANGE_GENRE,
    payload,
  };
};

export const sortAction = (payload) => {
  return {
    type: CHANGE_SORT,
    payload,
  };
};

export const deleteAction = (payload) => {
  return {
    type: DELETE_MOVIE,
    payload,
  };
};

export const changeMoviesDataAction = (payload) => {
  return {
    type: CHANGE_MOVIES_DATA,
    payload,
  };
};
