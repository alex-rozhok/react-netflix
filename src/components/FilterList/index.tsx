import React, { ReactElement } from 'react';
import classNames from 'classnames/bind';
import { Button } from '@components';
import styles from './style.module.less';
import { useAction, useMoviesState } from '@hooks';
import { genresList } from '@data';

export const FilterList = (): ReactElement => {
  const { changeGenresAction, fetchMoviesAction } = useAction();
  const { genre } = useMoviesState();

  const changeFilter = (clickedGenre: string) => {
    if (clickedGenre !== genre) {
      changeGenresAction(clickedGenre);
      fetchMoviesAction();
    }
  };

  const filterTabs = [{ label: 'All', value: 'all' }, ...genresList];
  return (
    <ul className="row">
      {filterTabs.map((filterTab) => {
        return (
          <li
            key={filterTab.value}
            className={classNames(
              styles.filter__item,
              filterTab.value === genre && styles.active,
            )}
          >
            <Button
              view="filter"
              onClick={() => {
                changeFilter(filterTab.value);
              }}
            >
              {filterTab.label}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
