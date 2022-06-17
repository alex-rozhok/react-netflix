import React, { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.less';
import { MovieItem } from './MovieItem';
import { useAppContext } from '@hooks';

export const Movies: FC = () => {
  const {
    state: { movies, sort },
  } = useAppContext();
  const movieCount = movies.length;

  const sortedMovies = [...movies].sort((a, b) => {
    return a[sort].localeCompare(b[sort]);
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
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </section>
  );
};
