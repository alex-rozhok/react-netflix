/* eslint-disable no-case-declarations */
import { IAppState } from '@types';
import TYPE from './types';

export const reducer = (state: IAppState, action): IAppState => {
  switch (action.type) {
    case TYPE.FILTER_MOVIE:
      const filteredMovies =
        action.payload === 'All'
          ? state.data
          : state.data.filter((movie) => movie.genres.includes(action.payload));
      return { ...state, movies: filteredMovies };
    case TYPE.CHANGE_GENRE:
      const changedGenre = state.genres.map((genre) => {
        return genre.name === action.payload
          ? { ...genre, active: true }
          : { ...genre, active: false };
      });
      return { ...state, genres: changedGenre };
    case TYPE.CHANGE_SORT:
      return { ...state, sort: action.payload };
    case TYPE.DELETE_MOVIE:
      const newData = state.data.filter((el) => el.id !== action.payload.id);
      return { ...state, data: newData };
    case TYPE.CHANGE_MOVIES_DATA:
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
    case TYPE.SELECT_MOVIE:
      return { ...state, selectedMovie: action.payload };
    default:
      return state;
  }
};
