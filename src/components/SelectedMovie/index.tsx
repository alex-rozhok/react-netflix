import React, { ReactElement } from 'react';
import styles from './style.module.less';
import { Poster, MovieGenres } from '@components';
import { IMovie } from '@interfaces';

interface ISelectedMovieProps {
  movie: IMovie;
}

export const SelectedMovie = ({ movie }: ISelectedMovieProps): ReactElement => {
  const runtime = (() => {
    const hours = Math.trunc(movie.runtime / 60);
    const minutes = movie.runtime % 60;
    return `${hours}h ${minutes}min`;
  })();

  return (
    <div className={styles.selectedMovie}>
      <div className={styles.selectedMovie__container}>
        <Poster poster={movie.poster_path} title={movie.title} />
        <div>
          <div className="row nowrap">
            <div>
              <h2 className={styles.selectedMovie__title}>{movie.title}</h2>
              <MovieGenres genres={movie.genres} />
            </div>
            <div className={styles.selectedMovie__rating}>
              {movie.vote_average}
            </div>
          </div>
          <div className={styles.selectedMovie__times}>
            <p>{movie.release_date}</p>
            <p>{runtime}</p>
          </div>
          <div className={styles.selectedMovie__overview}>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
