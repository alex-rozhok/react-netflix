import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';

export const MoviePoster = ({ poster, title }) => (
  <picture className={styles.movie__poster}>
    <img className={styles.movie__img} src={poster} alt={title} />
  </picture>
);

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string,
};
