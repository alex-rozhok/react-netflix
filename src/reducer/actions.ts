import { IMovie } from '@types';
import TYPE from './types';

export const filterMoviesAction = (payload: string) => {
  return {
    type: TYPE.FILTER_MOVIE,
    payload,
  };
};

export const changeGenresAction = (payload: string) => {
  return {
    type: TYPE.CHANGE_GENRE,
    payload,
  };
};

export const sortAction = (payload: string) => {
  return {
    type: TYPE.CHANGE_SORT,
    payload,
  };
};

export const deleteAction = (payload: IMovie) => {
  return {
    type: TYPE.DELETE_MOVIE,
    payload,
  };
};

export const changeMoviesDataAction = (payload: IMovie) => {
  return {
    type: TYPE.CHANGE_MOVIES_DATA,
    payload,
  };
};

export const showMovieAction = (payload: IMovie | null) => {
  return {
    type: TYPE.SELECT_MOVIE,
    payload,
  };
};
