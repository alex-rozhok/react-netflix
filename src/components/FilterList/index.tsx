import React, { useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { Button } from '@components';
import styles from './style.module.less';
import { changeGenresAction, filterMoviesAction } from '@actions';
import { useAppContext } from '@hooks';
import { IGenre } from '@types';

export const FilterList = () => {
  const {
    state: { data, genres },
    dispatch,
  } = useAppContext();
  const currentFilter = useRef('All');

  const filterMovies = useCallback(
    (selectedGenre: string) => {
      dispatch(filterMoviesAction(selectedGenre));
    },
    [data],
  );

  const changeFilter = (clickedGenre: string) => {
    if (currentFilter.current !== clickedGenre) {
      currentFilter.current = clickedGenre;
      dispatch(changeGenresAction(clickedGenre));
      filterMovies(clickedGenre);
    }
  };

  useEffect(() => {
    filterMovies(currentFilter.current);
  }, [filterMovies]);

  return (
    <ul className="row">
      {genres.map((genre: IGenre) => {
        return (
          <li
            key={genre.name}
            className={classNames(
              styles.filter__item,
              genre.active && styles.active,
            )}
          >
            <Button
              view="filter"
              onClick={() => {
                changeFilter(genre.name);
              }}
            >
              {genre.name}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
