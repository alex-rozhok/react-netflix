import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';
import { MovieCaption } from './MovieCaption';

export const MovieInfo = ({ title, genres, year }) => {
  return (
    <div className={styles.movie__info}>
      <MovieCaption title={title} genres={genres} />
      <p className={styles.movie__year}>{year} </p>
    </div>
  );
};

MovieInfo.propTypes = {
  year: PropTypes.string,
  title: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};
