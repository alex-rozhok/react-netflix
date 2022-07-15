import React, { ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Button } from '@components';
import styles from './style.module.less';
import { useAction, useMoviesState } from '@hooks';
import { filterTabs } from '@data';

export const FilterList = (): ReactElement => {
  const { fetchNewGenresAction } = useAction();
  const { genre } = useMoviesState();

  const [searchParams, setSearchParams] = useSearchParams();
  const changeFilter = (clickedGenre: string) => {
    if (clickedGenre !== genre) {
      searchParams.set('genre', clickedGenre);
      setSearchParams(searchParams);
      fetchNewGenresAction(clickedGenre);
    }
  };

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
