import React from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './style.module.less';
import { SelectedMovie } from './SelectedMovie';
import { SearchBar } from './SearchBar';

export const Hero = () => {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get('movie');
  return (
    <>
      <section className={styles.hero}>
        <div className={classNames(styles.hero__container, 'container')}>
          {movieId ? <SelectedMovie movieId={+movieId} /> : <SearchBar />}
        </div>
      </section>
    </>
  );
};
