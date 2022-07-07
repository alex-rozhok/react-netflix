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
  | TSelectMovieAction
  | TChangeGenresAction
  | TSortAction
  | TShowMoviesAction
  | TSetMoviesAmountAction
  | THideAlertAction
  | TShowAlertAction
  | TShowLoaderAction
  | THideLoaderAction;

type THideAlertAction = {
  type: typeof Types.ALERT_HIDE;
};

type TShowAlertAction = {
  type: typeof Types.ALERT_SHOW;
  text: string;
  status: TAlertStatus;
};
type TShowLoaderAction = {
  type: typeof Types.LOADER_SHOW;
};

type THideLoaderAction = {
  type: typeof Types.LOADER_HIDE;
};

type TSelectMovieAction = {
  type: typeof Types.SELECT_MOVIE;
  movie?: IMovie;
};

type TChangeGenresAction = {
  type: typeof Types.CHANGE_GENRE;
  genre: string;
};

type TSortAction = {
  type: typeof Types.CHANGE_SORT;
  sortBy: string;
};

type TShowMoviesAction = {
  type: typeof Types.SHOW_MOVIES;
  movies: IMovie[];
};

type TSetMoviesAmountAction = {
  type: typeof Types.SET_MOVIES_AMOUNT;
  count: number;
};

const hideAlert = (): THideAlertAction => ({
  type: Types.ALERT_HIDE,
});

const showAlert = (text: string, status: TAlertStatus): TShowAlertAction => ({
  type: Types.ALERT_SHOW,
  text,
  status,
});

export const showAlertAction = (
  text: string,
  status: TAlertStatus,
): ThunkAction<void, IState, unknown, THideAlertAction | TShowAlertAction> => {
  return (dispatch) => {
    dispatch(showAlert(text, status));
    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };
};

export const showLoaderAction = (): TShowLoaderAction => ({
  type: Types.LOADER_SHOW,
});

export const hideLoaderAction = (): THideLoaderAction => ({
  type: Types.LOADER_HIDE,
});

export const selectMovieAction = (movie?: IMovie): TSelectMovieAction => ({
  type: Types.SELECT_MOVIE,
  movie,
});

export const changeGenresAction = (genre: string): TChangeGenresAction => ({
  type: Types.CHANGE_GENRE,
  genre,
});

export const sortAction = (sortBy: string): TSortAction => ({
  type: Types.CHANGE_SORT,
  sortBy,
});

export const showMoviesAction = (movies: IMovie[]): TShowMoviesAction => ({
  type: Types.SHOW_MOVIES,
  movies,
});

export const setMoviesAmountAction = (
  count: number,
): TSetMoviesAmountAction => {
  return { type: Types.SET_MOVIES_AMOUNT, count };
};

export const showMoreMoviesAction = (
  data: IMovie[],
): ThunkAction<void, IState, unknown, TShowMoviesAction> => {
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
    dispatch(showLoaderAction());
    !offset && dispatch(setMoviesAmountAction(0));

    const showMovies = offset ? showMoreMoviesAction : showMoviesAction;
    const {
      movies: { sortBy, genre },
    } = getState();

    const filter = genre === 'all' ? '' : `&filter=${genre}`;
    // eslint-disable-next-line max-len
    const URL = `${API.baseUrl}?limit=${limit}&offset=${offset}&sortOrder=desc&sortBy=${sortBy}${filter}`;
    await fetch(URL)
      .then((result) => result.json())
      .then((response) => {
        dispatch(setMoviesAmountAction(response.totalAmount));
        dispatch(showMovies(response.data));
        dispatch(hideLoaderAction());
      })
      .catch(() => {
        dispatch(hideLoaderAction());
        dispatch(showAlertAction('Failed to get movie list', ALERT.error));
      });
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

type TPutMovieAction = 'add' | 'edit';

export const putMovieValuesAction = (
  movieData: IMovie,
  action: TPutMovieAction,
): ThunkAction<void, IState, unknown, TActions> => {
  return async (dispatch, getState) => {
    const {
      movies: { selectedMovie },
    } = getState();
    const fetchMethod = action === 'add' ? 'POST' : 'PUT';
    await fetch(`${API.baseUrl}`, {
      method: fetchMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movieData),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch(
          showAlertAction(
            `Movie has been ${action}ed successfully`,
            ALERT.success,
          ),
        );
        dispatch(fetchMoviesAction());
        if (action === 'edit') {
          selectedMovie?.id === movieData.id &&
            dispatch(selectMovieAction(movieData));
        }
      })
      .catch(() => {
        dispatch(showAlertAction(`Failed to ${action} new movie`, ALERT.error));
      });
  };
};
