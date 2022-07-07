import React, { ReactElement } from 'react';
import * as Yup from 'yup';
import styles from './style.module.less';
import { CalendarIcon } from '@icons';
import { IMovie } from '@interfaces';
import { genresSelectOptions } from '@data';
import { Formik, Form } from 'formik';
import {
  FormikDatePicker,
  FormikInput,
  FormikSelect,
  FormikTextArea,
} from './FormikFields';
import { Button } from '@common/Button';
import classNames from 'classnames/bind';

interface IMovieFormProps {
  formId: string;
  movie?: IMovie;
  submitHandler: (movie: IMovie) => void;
  additionalSubmitHandler?: () => void;
}

export const MovieForm = ({
  formId,
  movie,
  submitHandler,
  additionalSubmitHandler = () => {},
}: IMovieFormProps): ReactElement => {
  const defaultValue = {
    title: '',
    tagline: 'tagline',
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

  // format genres to array of object
  const receivedMovie = movie
    ? {
        ...movie,
        genres: movie?.genres.map((el) => ({
          label: el,
          value: el.toLowerCase().replace(/ /g, '-'),
        })),
      }
    : null;

  const stateData = receivedMovie || defaultValue;

  // format genres to array of strings
  const formatGenresValue = (genres) => genres.map((genre) => genre.label);

  const handlerSubmit = (values: IMovie) => {
    const formatedValues = {
      ...values,
      genres: formatGenresValue(values.genres),
    };
    submitHandler(formatedValues);
    additionalSubmitHandler();
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    release_date: Yup.date().required('Required'),
    poster_path: Yup.string()
      .matches(/^https?:\/\/\S+(?:jpg|jpeg|png)$/, 'should be path to img')
      .required('Required'),
    vote_average: Yup.number()
      .required('Required')
      .nullable()
      .max(10, 'rating must be less than or equal to 10')
      .min(0, 'rating must be greater than or equal to 0'),
    genres: Yup.array()
      .of(
        Yup.object({
          label: Yup.string().required(),
          value: Yup.string().required(),
        }),
      )
      .min(1, 'Required'),
    runtime: Yup.number()
      .required('Required')
      .integer('Runtime must be an integer')
      .min(0)
      .nullable(),
    overview: Yup.string().required('Required'),
  });

  return (
    <Formik
      initialValues={stateData}
      onSubmit={handlerSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form id={formId} className={styles.form}>
          <FormikInput
            label="Title"
            name="title"
            type="text"
            placeholder="Title"
          />
          <FormikDatePicker
            label="RELEASE DATE"
            name="release_date"
            id="date"
            placeholder="Select Date"
            onChange={(value) => formik.setFieldValue('release_date', value)}
            icon={<CalendarIcon />}
          />
          <FormikInput
            label="MOVIE URL"
            name="poster_path"
            id="poster"
            type="text"
            placeholder="https://"
          />
          <FormikInput
            label="RATING"
            name="vote_average"
            id="rating"
            type="number"
            placeholder="Rating"
            max="10"
            min="0"
            step="0.1"
          />
          <FormikSelect
            label="GENRE"
            name="genres"
            placeholder="Select Genre"
            options={genresSelectOptions}
            onChange={(value) => {
              formik.setFieldValue('genres', value);
            }}
          />
          <FormikInput
            label="RUNTIME"
            name="runtime"
            type="number"
            placeholder="Minutes"
            min="0"
          />
          <div className={styles.form__full_field}>
            <FormikTextArea
              label="OVERVIEW"
              name="overview"
              placeholder="Movie description"
            />
          </div>
          <div
            className={classNames(
              styles.form__full_field,
              styles.form__buttons,
            )}
          >
            <Button disabled={!formik.dirty} type="reset" view="secondary">
              RESET
            </Button>
            <Button
              disabled={!formik.dirty || !formik.isValid}
              type="submit"
              view="main"
            >
              SUBMIT
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
