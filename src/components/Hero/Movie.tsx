import React, { ReactElement } from 'react';
import styles from './style.module.less';
import { Logo, Button, SelectedMovie } from '@components';
import { SearchIcon } from '@icons';
import { useAction, useMoviesState } from '@hooks';

export const Movie = (): ReactElement => {
  const { selectedMovie } = useMoviesState();
  const { selectMovieAction } = useAction();
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="row space-between">
            <Logo />
            <Button view="icon" onClick={() => selectMovieAction()}>
              <SearchIcon />
            </Button>
          </div>
          <SelectedMovie movie={selectedMovie} />
        </div>
      </section>
    </>
  );
};
