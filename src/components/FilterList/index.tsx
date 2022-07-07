import React, { ReactElement, useMemo } from 'react';
import classNames from 'classnames/bind';
import { Button } from '@components';
import styles from './style.module.less';
import { useAction, useMoviesState } from '@hooks';
import { genres } from '@data';

export const FilterList = (): ReactElement => {
  const { changeGenresAction, fetchMoviesAction } = useAction();
  const { genre } = useMoviesState();

  const genresTab = useMemo(() => {
    return [...genres].map((item) =>
      item.label === genre
        ? { ...item, active: true }
        : { ...item, active: false },
    );
  }, [genre]);

  const changeFilter = (clickedGenre: string) => {
    if (clickedGenre !== genre) {
      changeGenresAction(clickedGenre);
      fetchMoviesAction();
    }
  };

  return (
    <ul className="row">
      {genresTab.map((genre) => {
        return (
          <li
            key={genre.id}
            className={classNames(
              styles.filter__item,
              genre.active && styles.active,
            )}
          >
            <Button
              view="filter"
              onClick={() => {
                changeFilter(genre.label);
              }}
            >
              {genre.label}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
