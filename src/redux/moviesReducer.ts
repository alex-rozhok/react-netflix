/* eslint-disable no-case-declarations */
import { IMoviesState } from '@interfaces';
import * as Types from './types';
import { TActions } from '@actions';

const initialState: IMoviesState = {
  movies: [],
  genre: 'all',
  sortBy: 'release_date',
  totalMovies: 0,
};

export const moviesReducer = (
  state = initialState,
  action: TActions,
): IMoviesState => {
  switch (action.type) {
    case Types.CHANGE_GENRE:
      return { ...state, genre: action.genre };
    case Types.CHANGE_SORT:
      return { ...state, sortBy: action.sortBy };
    case Types.SELECT_MOVIE:
      return { ...state, selectedMovie: action.movie };
    case Types.SET_MOVIES_AMOUNT:
      return { ...state, totalMovies: action.count };
    case Types.SHOW_MOVIES:
      return { ...state, movies: action.movies };
    default:
      return state;
  }
};
