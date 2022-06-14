import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';

export const MovieCaption = ({ title, genres }) => (
  <>
    <h3 className={styles.movie__title}>{title}</h3>
    <p className={styles.movie__genres}>
      {genres.length === 2 ? genres.join(' & ') : genres.join(', ')}
    </p>
  </>
);

MovieCaption.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};
