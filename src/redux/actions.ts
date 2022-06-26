import { TAlertStatus, IMovie, IState } from '@interfaces';
import { ThunkAction } from 'redux-thunk';
import * as Types from './types';

const API = {
  baseUrl: 'http://localhost:4000/movies',
  limit: 9,
};

const ALERT: Record<string, TAlertStatus> = {
  success: 'success',
  error: 'error',
};

export type TActions =
  | selectMovieActionType
  | changeGenresActionType
  | sortActionType
  | showMoviesActionType
  | setMoviesAmountActionType
  | hideAlertType
  | showAlertType
  | showLoaderActionType
  | hideLoaderActionType;

type hideAlertType = {
  type: typeof Types.ALERT_HIDE;
};

type showAlertType = {
  type: typeof Types.ALERT_SHOW;
  text: string;
  status: TAlertStatus;
};
type showLoaderActionType = {
  type: typeof Types.LOADER_SHOW;
};

type hideLoaderActionType = {
  type: typeof Types.LOADER_HIDE;
};

type selectMovieActionType = {
  type: typeof Types.SELECT_MOVIE;
  movie?: IMovie;
};

type changeGenresActionType = {
  type: typeof Types.CHANGE_GENRE;
  genre: string;
};

type sortActionType = {
  type: typeof Types.CHANGE_SORT;
  sortBy: string;
};

type showMoviesActionType = {
  type: typeof Types.SHOW_MOVIES;
  movies: IMovie[];
};

type setMoviesAmountActionType = {
  type: typeof Types.SET_MOVIES_AMOUNT;
  count: number;
};

const hideAlert = (): hideAlertType => ({
  type: Types.ALERT_HIDE,
});

const showAlert = (text: string, status: TAlertStatus): showAlertType => ({
  type: Types.ALERT_SHOW,
  text,
  status,
});

export const showAlertAction = (
  text: string,
  status: TAlertStatus,
): ThunkAction<void, IState, unknown, hideAlertType | showAlertType> => {
  return (dispatch) => {
    dispatch(showAlert(text, status));
    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };
};

export const showLoaderAction = (): showLoaderActionType => ({
  type: Types.LOADER_SHOW,
});

export const hideLoaderAction = (): hideLoaderActionType => ({
  type: Types.LOADER_HIDE,
});

export const selectMovieAction = (movie?: IMovie): selectMovieActionType => ({
  type: Types.SELECT_MOVIE,
  movie,
});

export const changeGenresAction = (genre: string): changeGenresActionType => ({
  type: Types.CHANGE_GENRE,
  genre,
});

export const sortAction = (sortBy: string): sortActionType => ({
  type: Types.CHANGE_SORT,
  sortBy,
});

export const showMoviesAction = (movies: IMovie[]): showMoviesActionType => ({
  type: Types.SHOW_MOVIES,
  movies,
});

export const setMoviesAmountAction = (
  count: number,
): setMoviesAmountActionType => {
  return { type: Types.SET_MOVIES_AMOUNT, count };
};

export const showMoreMoviesAction = (
  data: IMovie[],
): ThunkAction<void, IState, unknown, showMoviesActionType> => {
  return (dispatch, getState) => {
    const {
      movies: { movies },
    } = getState();
    const updatedMovies = [...movies, ...data];
    dispatch(showMoviesAction(updatedMovies));
  };
};

export const fetchMoviesAction = (
  offset = 0,
  limit = API.limit,
): ThunkAction<void, IState, unknown, TActions> => {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoaderAction());
      !offset && dispatch(setMoviesAmountAction(0));

      const showMovies = offset ? showMoreMoviesAction : showMoviesAction;
      const {
        movies: { sortBy, genre },
      } = getState();

      const filter = genre === 'All' ? '' : `&filter=${genre}`;
      // eslint-disable-next-line max-len
      const URL = `${API.baseUrl}?limit=${limit}&offset=${offset}&sortOrder=desc&sortBy=${sortBy}${filter}`;
      const response = await fetch(URL).then((result) => result.json());
      setTimeout(() => {
        dispatch(setMoviesAmountAction(response.totalAmount));
        dispatch(showMovies(response.data));
        dispatch(hideLoaderAction());
      }, 300);
    } catch (e) {
      dispatch(hideLoaderAction());
      dispatch(showAlertAction('Failed to get movie list', ALERT.error));
    }
  };
};

export const deleteMovieAction = (
  id: number,
): ThunkAction<void, IState, unknown, TActions> => {
  return (dispatch, getState) => {
    const {
      movies: { movies, totalMovies },
    } = getState();

    const updatedMovies = movies.filter((movie) => movie.id !== id);
    if (totalMovies === movies.length) {
      dispatch(setMoviesAmountAction(totalMovies - 1));
    }
    dispatch(showMoviesAction(updatedMovies));
  };
};

export const requestDeleteMovieAction = (
  id: number,
): ThunkAction<void, IState, unknown, TActions> => {
  return async (dispatch, getState) => {
    const {
      movies: { movies, totalMovies },
    } = getState();
    const { status } = await fetch(`${API.baseUrl}/${id}`, {
      method: 'DELETE',
    });

    if (status >= 200 && status < 300) {
      dispatch(deleteMovieAction(id));
      if (totalMovies > movies.length) {
        dispatch(fetchMoviesAction(movies.length - 1, 1));
      }
      dispatch(
        showAlertAction('Movie has been deleted successfully', ALERT.success),
      );
    } else {
      dispatch(showAlertAction('Failed to delete movie', ALERT.error));
    }
  };
};
