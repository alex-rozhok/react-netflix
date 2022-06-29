import React, { ChangeEvent, FormEvent, ReactElement, useReducer } from 'react';
import styles from './style.module.less';
import { CalendarIcon } from '@icons';
import { Input, Label, Select, Textarea } from '@common';
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
    id: new Date().getTime(),
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
      <Label label="TITLE">
        <Input
          type="text"
          value={state.title}
          onChange={(e) => dispatch({ title: getValue(e) })}
          placeholder="Title"
        />
      </Label>
      <Label label="RELEASE DATE">
        <Input
          type="text"
          value={state.release_date}
          onChange={(e) => dispatch({ release_date: getValue(e) })}
          placeholder="Select Date"
          icon={<CalendarIcon />}
        />
      </Label>
      <Label label="MOVIE URL">
        <Input
          type="text"
          value={state.poster_path}
          onChange={(e) => dispatch({ poster_path: getValue(e) })}
          placeholder="https://"
        />
      </Label>
      <Label label="RATING">
        <Input
          value={state.vote_average}
          onChange={(e) => dispatch({ vote_average: +getValue(e) })}
          placeholder="9.9"
          type="number"
          max="10"
          min="0"
          step="0.1"
        />
      </Label>
      <Label label="GENRE">
        <Select
          options={options}
          value={state.genres}
          onChange={selectChangeHandler}
          placeholder="Select Genre"
        />
      </Label>
      <Label label="RUNTIME">
        <Input
          value={state.runtime}
          onChange={(e) => dispatch({ runtime: +getValue(e) })}
          placeholder="Minutes"
          type="number"
        />
      </Label>
      <div className={styles.form__full_field}>
        <Label label="OVERVIEW">
          <Textarea
            value={state.overview}
            onChange={(e) => dispatch({ overview: getValue(e) })}
            placeholder="Movie description"
          />
        </Label>
      </div>
    </form>
  );
};
