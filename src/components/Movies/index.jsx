import React, { useMemo } from 'react';
import styles from './style.module.less';
import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';

export const Movies = ({ movies, sortBy, setMoviesData }) => {
  const movieCount = movies.length;

  const sortedMovies = useMemo(() => {
    return [...movies].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }, [sortBy, movies]);
  return (
    <section className={`${styles.movie} container`}>
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
              setMoviesData={setMoviesData}
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
  setMoviesData: PropTypes.func,
};
