import React, { ChangeEvent, FormEvent, ReactElement, useReducer } from 'react';
import styles from './style.module.less';
import { CalendarIcon } from '@icons';
import { Input, Label, Select, Textarea, DatePicker } from '@components';
import { IMovie } from '@interfaces';
import { useAction, useMoviesState } from '@hooks';
import { genres } from '@data';
interface IMovieFormProps {
  formId: string;
  movie?: IMovie;
  additionalSubmitHandler?: () => void;
}

export const MovieForm = ({
  formId,
  movie,
  additionalSubmitHandler = () => {},
}: IMovieFormProps): ReactElement => {
  const initialState: IMovie = {
    id: Date.now(),
    title: '',
    tagline: '',
    vote_average: 0,
    vote_count: 0,
    release_date: '',
    poster_path: '',
    overview: '',
    budget: 0,
    revenue: 0,
    genres: [],
    runtime: 0,
  };

  const { selectedMovie } = useMoviesState();
  const { changeMoviesDataAction, selectMovieAction } = useAction();

  const stateData = movie || initialState;
  const [state, dispatch] = useReducer(
    (state: IMovie, action: Partial<IMovie>): IMovie => {
      return { ...state, ...action };
    },
    stateData,
  );

  const changeMoviesData = (payload: IMovie) => {
    changeMoviesDataAction(payload);
    selectedMovie?.id === payload.id && selectMovieAction(payload);
  };

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeMoviesData(state);
    additionalSubmitHandler();
  };

  const handlerReset = () => {
    dispatch(stateData);
  };
  const getValue = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => event.target.value;

  const options = genres.filter((genre) => genre.label !== 'All');

  const selectChangeHandler = (newValue: any) => {
    dispatch({ genres: newValue.map((value: any) => value.label) });
  };

  return (
    <form
      id={formId}
      onSubmit={handlerSubmit}
      onReset={handlerReset}
      className={styles.form}
    >
      <Label target="movie-title">
        TITLE
        <Input
          id="movie-title"
          type="text"
          value={state.title}
          onChange={(e) => dispatch({ title: getValue(e) })}
          placeholder="Title"
        />
      </Label>
      <Label target="movie-date">
        RELEASE DATE
        <DatePicker
          date={state.release_date}
          changeDate={(date) => {
            dispatch({ release_date: date });
          }}
          icon={<CalendarIcon />}
          id="movie-date"
        />
      </Label>
      <Label target="movie-poster">
        MOVIE URL
        <Input
          id="movie-poster"
          type="text"
          value={state.poster_path}
          onChange={(e) => dispatch({ poster_path: getValue(e) })}
          placeholder="https://"
        />
      </Label>
      <Label target="movie-rating">
        RATING
        <Input
          id="movie-rating"
          value={state.vote_average}
          onChange={(e) => dispatch({ vote_average: +getValue(e) })}
          placeholder="9.9"
          type="number"
          max="10"
          min="0"
          step="0.1"
        />
      </Label>
      <Label target="movie-genres">
        GENRE
        <Select
          id="movie-genres"
          options={options}
          value={state.genres}
          onChange={selectChangeHandler}
          placeholder="Select Genre"
        />
      </Label>
      <Label target="movie-rutime">
        RUNTIME
        <Input
          id="movie-rutime"
          value={state.runtime}
          onChange={(e) => dispatch({ runtime: +getValue(e) })}
          placeholder="Minutes"
          type="number"
        />
      </Label>
      <div className={styles.form__full_field}>
        <Label target="movie-overview">
          OVERVIEW
          <Textarea
            id="movie-overview"
            value={state.overview}
            onChange={(e) => dispatch({ overview: getValue(e) })}
            placeholder="Movie description"
          />
        </Label>
      </div>
    </form>
  );
};
