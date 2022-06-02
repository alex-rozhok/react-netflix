import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';
import { MoviePoster } from './MoviePoster';
import { MovieInfo } from './MovieInfo';
import { MovieOptions } from './MovieOptions';

export const MovieItem = ({ movie, setMoviesData }) => {
  const [showOptions, setShowOptions] = useState(false);
  const handlerMouseOver = () => setShowOptions(true);
  const handlerMouseLeave = () => setShowOptions(false);
  return (
    <li
      className={styles.movie__item}
      onMouseOver={handlerMouseOver}
      onMouseLeave={handlerMouseLeave}
    >
      <MoviePoster poster={movie.poster_path} title={movie.title} />
      {showOptions && (
        <MovieOptions
          movie={movie}
          setMoviesData={setMoviesData}
          setShowOptions={setShowOptions}
        />
      )}
      <a className={styles.movie__link} href={movie.href}>
        <MovieInfo
          title={movie.title}
          genres={movie.genres}
          year={movie.release_date}
        />
      </a>
    </li>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  setMoviesData: PropTypes.func,
};
