import React from 'react';
import styles from '../style.module.less';
import { Poster, MovieGenres } from '@components';
import { IMovie } from '@interfaces';

interface IselectedMovie {
  selectedMovie: IMovie;
}

export const Movie = ({
  selectedMovie,
}: IselectedMovie): React.ReactElement => {
  const runtime = (() => {
    const hours = Math.trunc(selectedMovie?.runtime / 60) || 0;
    const minutes = selectedMovie?.runtime % 60 || 0;
    return `${hours}h ${minutes}min`;
  })();
  return (
    <div className={styles.selectedMovie}>
      <div className={styles.selectedMovie__container}>
        <Poster
          poster={selectedMovie.poster_path}
          title={selectedMovie.title}
        />
        <div>
          <div className="row nowrap">
            <div>
              <h2 className={styles.selectedMovie__title}>
                {selectedMovie.title}
              </h2>
              <MovieGenres genres={selectedMovie.genres} />
            </div>
            <div className={styles.selectedMovie__rating}>
              {selectedMovie.vote_average}
            </div>
          </div>
          <div className={styles.selectedMovie__times}>
            <p>{selectedMovie.release_date}</p>
            <p>{runtime}</p>
          </div>
          <div className={styles.selectedMovie__overview}>
            <p>{selectedMovie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
