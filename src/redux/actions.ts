import { IMovie, IState } from '@interfaces';
import { Dispatch } from 'redux';
import CNST from '@constants';

const API = {
  baseUrl: 'http://localhost:4000/movies',
  limit: 9,
};

export const hideAlertAction = () => {
  return {
    type: CNST.TYPE.ALERT.HIDE,
  };
};

export const showAlertAction = (text: string, status: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CNST.TYPE.ALERT.SHOW,
      payload: { text, status },
    });
    setTimeout(() => {
      dispatch(hideAlertAction());
    }, 2000);
  };
};

export const showLoaderAction = () => {
  return { type: CNST.TYPE.LOADER.SHOW };
};
export const hideLoaderAction = () => {
  return { type: CNST.TYPE.LOADER.HIDE };
};

export const selectMovieAction = (movie?: IMovie) => {
  return {
    type: CNST.TYPE.SELECT_MOVIE,
    payload: movie,
  };
};

export const changeGenresAction = (payload: string) => {
  return {
    type: CNST.TYPE.CHANGE_GENRE,
    payload,
  };
};

export const sortAction = (sortBy: string) => {
  return {
    type: CNST.TYPE.CHANGE_SORT,
    payload: sortBy,
  };
};

export const showMoviesAction = (movies: IMovie[]) => {
  return {
    type: CNST.TYPE.SHOW_MOVIES,
    payload: movies,
  };
};

export const showMoreMoviesAction = (data: IMovie[]) => {
  return (dispatch: Dispatch, getState: () => IState) => {
    const {
      movies: { movies },
    } = getState();
    const updatedMovies = [...movies, ...data];
    dispatch(showMoviesAction(updatedMovies));
  };
};

export const setMoviesAmount = (payload: number) => {
  return { type: CNST.TYPE.SET_MOVIES_AMOUNT, payload };
};

export const fetchMoviesAction = (offset = 0, limit = API.limit) => {
  return async (dispatch: Dispatch, getState: () => IState) => {
    try {
      dispatch(showLoaderAction());
      !offset && dispatch(setMoviesAmount(0));

      const showMovies = offset ? showMoreMoviesAction : showMoviesAction;
      const {
        movies: { sortBy, genre },
      } = getState();

      const filter = genre === 'All' ? '' : `&filter=${genre}`;
      // eslint-disable-next-line max-len
      const URL = `${API.baseUrl}?limit=${limit}&offset=${offset}&sortOrder=desc&sortBy=${sortBy}${filter}`;
      const response = await fetch(URL).then((result) => result.json());
      setTimeout(() => {
        dispatch(setMoviesAmount(response.totalAmount));
        dispatch(showMovies(response.data));
        dispatch(hideLoaderAction());
      }, 300);
    } catch (e) {
      dispatch(hideLoaderAction());
      dispatch(
        showAlertAction(
          CNST.ALERT.TEXT.FAILED_MOVIES_REQUEST,
          CNST.ALERT.STATUS.ERROR,
        ),
      );
    }
  };
};

export const deleteMovieAction = (id: number) => {
  return (dispatch: Dispatch, getState: () => IState) => {
    const {
      movies: { movies, totalMovies },
    } = getState();

    const updatedMovies = movies.filter((movie) => movie.id !== id);
    if (totalMovies === movies.length) {
      dispatch(setMoviesAmount(totalMovies - 1));
    }
    dispatch(showMoviesAction(updatedMovies));
  };
};

export const requestDeleteMovieAction = (id: number) => {
  return async (dispatch: Dispatch, getState: () => IState) => {
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
        showAlertAction(
          CNST.ALERT.TEXT.SUCCESS_MOVIE_DELETE,
          CNST.ALERT.STATUS.SUCCESS,
        ),
      );
    } else {
      dispatch(
        showAlertAction(
          CNST.ALERT.TEXT.FAILED_MOVIE_DELETE,
          CNST.ALERT.STATUS.ERROR,
        ),
      );
    }
  };
};
