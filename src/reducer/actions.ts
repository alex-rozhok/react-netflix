import { IMovie } from '@types';
import {
  FILTER_MOVIE,
  CHANGE_GENRE,
  CHANGE_SORT,
  DELETE_MOVIE,
  CHANGE_MOVIES_DATA,
  SELECT_MOVIE,
} from './types';

export const filterMoviesAction = (payload: string) => {
  return {
    type: FILTER_MOVIE,
    payload,
  };
};

export const changeGenresAction = (payload: string) => {
  return {
    type: CHANGE_GENRE,
    payload,
  };
};

export const sortAction = (payload: string) => {
  return {
    type: CHANGE_SORT,
    payload,
  };
};

export const deleteAction = (payload: IMovie) => {
  return {
    type: DELETE_MOVIE,
    payload,
  };
};

export const changeMoviesDataAction = (payload: IMovie) => {
  return {
    type: CHANGE_MOVIES_DATA,
    payload,
  };
};

export const showMovieAction = (payload: IMovie | null) => {
  return {
    type: SELECT_MOVIE,
    payload,
  };
};
