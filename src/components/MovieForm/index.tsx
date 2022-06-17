import React, { ChangeEvent, FormEvent, ReactElement, useReducer } from 'react';
import styles from './style.module.less';
import { CalendarIcon } from '@icons';
import { Input, Label, Textarea } from '@common';
import { useAppContext } from '@hooks';
import { changeMoviesDataAction, showMovieAction } from '@actions';
import { IMovie } from '@types';

interface IMovieFormProps {
  formId: string;
  movie?: IMovie;
  additionalSubmitHandler?: () => void;
}

type TStringAction = {
  [key: string]: string;
};
type TFormAction = TStringAction | IMovie;

export const MovieForm = ({
  formId,
  movie,
  additionalSubmitHandler = () => {},
}: IMovieFormProps): ReactElement => {
  const initialState: IMovie = {
    id: new Date().getTime(),
    title: '',
    genres: [],
    release_date: '',
    poster_path: '',
    href: '',
    overview: '',
    rating: '',
    runtime: '',
  };

  const {
    state: { selectedMovie },
    dispatch: appDispatch,
  } = useAppContext();

  const stateData = movie || initialState;
  const [state, dispatch] = useReducer(
    (state: IMovie, action: TStringAction | IMovie) => {
      return { ...state, ...action };
    },
    stateData,
  );

  const changeMoviesData = (payload: IMovie) => {
    appDispatch(changeMoviesDataAction(payload));
    selectedMovie?.id === payload.id && appDispatch(showMovieAction(payload));
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
  return (
    <form
      id={formId}
      onSubmit={handlerSubmit}
      onReset={handlerReset}
      className={styles.form}
    >
      <Label label="TITLE">
        <Input
          value={state.title}
          onChange={(e) => dispatch({ title: getValue(e) })}
          placeholder="Title"
        />
      </Label>
      <Label label="RELEASE DATE">
        <Input
          value={state.release_date}
          onChange={(e) => dispatch({ release_date: getValue(e) })}
          placeholder="Select Date"
          icon={<CalendarIcon />}
        />
      </Label>
      <Label label="MOVIE URL">
        <Input
          value={state.href}
          onChange={(e) => dispatch({ href: getValue(e) })}
          placeholder="https://"
        />
      </Label>
      <Label label="RATING">
        <Input value="" onChange={() => {}} placeholder="9.9" type="number" />
      </Label>
      <Label label="GENRE">
        <Input
          value={state.genres.join(', ')}
          onChange={() => {}}
          placeholder="Select Genre"
        />
      </Label>
      <Label label="RUNTIME">
        <Input
          value=""
          onChange={() => {}}
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
