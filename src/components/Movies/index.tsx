import React, { ReactElement, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './style.module.less';
import { MovieItem } from './MovieItem';
import { useAction, useAppState, useMoviesState } from '@hooks';
import { Loader, Alert, Button } from '@components';

export const Movies = (): ReactElement => {
  const { movies, totalMovies } = useMoviesState();
  const { loading, alert } = useAppState();
  const {
    fetchMoviesAction,
    changeTitleSearchAction,
    changeGenresAction,
    sortAction,
  } = useAction();

  const [searchParams] = useSearchParams();
  const genreSearch = searchParams.get('genre');
  const sortSearch = searchParams.get('sortBy');
  const { searchQuery } = useParams();

  useEffect(() => {
    searchQuery && changeTitleSearchAction(searchQuery);
    genreSearch && changeGenresAction(genreSearch.toLowerCase());
    sortSearch && sortAction(sortSearch.toLowerCase());

    fetchMoviesAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = () => {
    fetchMoviesAction({ offset: movies.length });
  };

  return (
    <section className={classNames(styles.movie, 'container')}>
      {alert.text && <Alert />}

      {loading && !totalMovies ? (
        <Loader />
      ) : (
        <>
          <p className={styles.movie__count}>
            <strong>{totalMovies}</strong>
            {totalMovies !== 1 ? ' movies ' : ' movie '}
            found
          </p>
          <ul className={styles.movie__list}>
            {movies?.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </ul>
        </>
      )}
      {loading && totalMovies ? (
        <Loader />
      ) : (
        totalMovies > movies.length && (
          <div className="text-center">
            <Button onClick={loadMore} view="main">
              Load More
            </Button>
          </div>
        )
      )}
    </section>
  );
};
