import React, { ReactElement } from 'react';
import styles from './style.module.less';
import { Logo, Button, SelectedMovie } from '@components';
import { useAppContext } from '@hooks';
import { showMovieAction } from '@actions';
import { SearchIcon } from '@icons';

export const Movie = (): ReactElement => {
  const {
    state: { selectedMovie },
    dispatch,
  } = useAppContext();
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="row space-between">
            <Logo />
            <Button view="icon" onClick={() => dispatch(showMovieAction(null))}>
              <SearchIcon />
            </Button>
          </div>
          <SelectedMovie movie={selectedMovie} />
        </div>
      </section>
    </>
  );
};
