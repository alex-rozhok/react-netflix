import React, { FC } from 'react';
import styles from './style.module.less';
import { Logo, Button, SelectedMovie } from '@components';
import { useAppContext } from '@hooks';
import { showMovieAction } from '@actions';
import { SearchIcon } from '@icons';

export const Movie: FC = () => {
  const {
    state: { selectMovie },
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
          <SelectedMovie movie={selectMovie} />
        </div>
      </section>
    </>
  );
};
