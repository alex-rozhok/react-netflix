import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';
import { Calendar } from '@icons';
import { Input, Label, Textarea } from '@components';

export const MovieForm = ({
  formId,
  movie,
  changeMoviesData,
  additionalSubmitHandler,
}) => {
  const initialState = {
    id: new Date().getTime(),
    title: '',
    genres: [],
    release_date: '',
    poster_path: '',
    href: '',
    overview: '',
  };

  const stateData = movie || initialState;
  const [state, dispatch] = useReducer((state, action) => {
    return { ...state, ...action };
  }, stateData);

  const handlerSubmit = (e) => {
    e.preventDefault();
    changeMoviesData(state);
    additionalSubmitHandler();
  };

  const handlerReset = () => {
    dispatch(stateData);
  };
  const getValue = () => event.target.value;
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
          onChange={() => dispatch({ title: getValue() })}
          placeholder="Title"
        />
      </Label>
      <Label label="RELEASE DATE">
        <Input
          value={state.release_date}
          onChange={() => dispatch({ release_date: getValue() })}
          placeholder="Select Date"
          icon={<Calendar />}
        />
      </Label>
      <Label label="MOVIE URL">
        <Input
          value={state.href}
          onChange={() => dispatch({ href: getValue() })}
          placeholder="https://"
        />
      </Label>
      <Label label="RATING">
        <Input
          value=""
          onChange={() => {}}
          placeholder="9.9"
          type="number"
          max={10}
          min={0}
        />
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
            onChange={() => dispatch({ overview: getValue() })}
            placeholder="Movie description"
          />
        </Label>
      </div>
    </form>
  );
};
MovieForm.defaultProps = {
  additionalSubmitHandler: () => {},
};
MovieForm.propTypes = {
  formId: PropTypes.string,
  data: PropTypes.array,
  movie: PropTypes.object,
  changeMoviesData: PropTypes.func.isRequired,
  additionalSubmitHandler: PropTypes.func,
};
