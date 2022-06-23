/* eslint-disable no-case-declarations */
import { IMovie, IMoviesState } from '@interfaces';
import CNST from '@constants';

const initialState: IMoviesState = {
  movies: [],
  genre: 'All',
  sortBy: 'release_date',
  totalMovies: 0,
};

export const moviesReducer = (
  state = initialState,
  { type, payload },
): IMoviesState => {
  switch (type) {
    case CNST.TYPE.CHANGE_GENRE:
      return { ...state, genre: payload };
    case CNST.TYPE.CHANGE_SORT:
      return { ...state, sortBy: payload };
    case CNST.TYPE.SELECT_MOVIE:
      return { ...state, selectedMovie: payload };
    case CNST.TYPE.SET_MOVIES_AMOUNT:
      return { ...state, totalMovies: payload };
    case CNST.TYPE.SHOW_MOVIES:
      return { ...state, movies: payload };
    default:
      return state;
  }
};
