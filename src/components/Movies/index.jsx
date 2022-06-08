import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.less';
import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';

export const Movies = ({ movies, sortBy, deleteMovie, changeMoviesData }) => {
  const movieCount = movies.length;

  const sortedMovies = [...movies].sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
  });

  return (
    <section className={classNames(styles.movie, 'container')}>
      <p className={styles.movie__count}>
        <strong>{movieCount}</strong> {movieCount !== 1 ? 'movies ' : 'movie '}
        found
      </p>
      {movieCount > 0 && (
        <ul className={styles.movie__list}>
          {sortedMovies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              deleteMovie={deleteMovie}
              changeMoviesData={changeMoviesData}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortBy: PropTypes.string,
  deleteMovie: PropTypes.func,
  changeMoviesData: PropTypes.func,
};
