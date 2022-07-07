import React, { ReactElement, useState } from 'react';
import styles from './style.module.less';
import { Poster, MovieGenres } from '@components';
import { MovieOptions } from './MovieOptions';
import { IMovie } from '@interfaces';
import { useAction, useMoviesState } from '@hooks';

interface IMovieItemProps {
  movie: IMovie;
}

export const MovieItem = ({ movie }: IMovieItemProps): ReactElement => {
  const { title, genres, release_date, poster_path } = movie;
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const handlerMouseOver = () => setShowOptions(true);
  const handlerMouseLeave = () => setShowOptions(false);

  const { selectedMovie } = useMoviesState();
  const { selectMovieAction } = useAction();

  const clickHandler = () => {
    if (selectedMovie?.id !== movie.id) {
      selectMovieAction(movie);
      document.documentElement.scrollTo(0, 0);
    }
  };

  const showYear = release_date.split('-')[0];

  return (
    <li
      className={styles.movie__item}
      onMouseOver={handlerMouseOver}
      onMouseLeave={handlerMouseLeave}
    >
      <a className={styles.movie__link} onClick={clickHandler}>
        <Poster poster={poster_path} title={title} />
        <div className={styles.movie__info}>
          <h3 className={styles.movie__title}>{title} </h3>
          <MovieGenres genres={genres} />
          <p className={styles.movie__year}>{showYear} </p>
        </div>
      </a>
      {showOptions && (
        <MovieOptions movie={movie} setShowOptions={setShowOptions} />
      )}
    </li>
  );
};
