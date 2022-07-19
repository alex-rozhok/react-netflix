import React, { ReactElement, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Dropdown, Button } from '@components';
import { CaretDownIcon } from '@icons';
import styles from './style.module.less';
import { useAction, useMoviesState } from '@hooks';
import { sortItems } from '@data';

export const Sort = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const toggleDropdown = () => setIsDropdownOpened(!isDropdownOpened);
  const closeDropdown = () => setIsDropdownOpened(false);

  const { sortBy } = useMoviesState();
  const { fetchNewSortAction } = useAction();

  const changeSort = (payload: string) => {
    if (payload !== sortBy) {
      searchParams.set('sortBy', payload);
      setSearchParams(searchParams);
      fetchNewSortAction(payload);
    }
  };

  const changeHandler = (value: string) => {
    changeSort(value);
    closeDropdown();
  };

  return (
    <div className={styles.sort__row}>
      <p className={styles.sort__by}>SORT BY</p>
      <Dropdown isShow={isDropdownOpened} closeDropdown={closeDropdown}>
        <Dropdown.Button view="filter" onClick={toggleDropdown}>
          {sortItems.find((el) => el.value === sortBy)?.name || 'CLICK OPTION'}
          <span className={styles.sort__toggle_icon}>
            <CaretDownIcon />
          </span>
        </Dropdown.Button>
        <Dropdown.Body classes={styles.sort__dropdown}>
          {sortItems.map((item) => (
            <Button
              key={item.id}
              value={item.value}
              onClick={() => changeHandler(item.value)}
              view="listItem"
            >
              {item.name}
            </Button>
          ))}
        </Dropdown.Body>
      </Dropdown>
    </div>
  );
};
