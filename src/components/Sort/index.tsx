import React, { ReactElement, useState } from 'react';
import { Dropdown, Button } from '@components';
import { CaretDownIcon } from '@icons';
import styles from './style.module.less';
import { useAppContext } from '@hooks';
import { sortAction } from '@actions';

export const Sort = (): ReactElement => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const toggleDropdown = () => setIsDropdownOpened(!isDropdownOpened);
  const closeDropdown = () => setIsDropdownOpened(false);

  const {
    state: { sort },
    dispatch,
  } = useAppContext();

  const changeSort = (payload: string) => {
    payload !== sort && dispatch(sortAction(payload));
  };

  const sortItems = [
    { id: 1, value: 'release_date', name: 'RELEASE DATE' },
    { id: 2, value: 'title', name: 'NAME' },
  ];
  const changeHandler = (value: string) => {
    changeSort(value);
    closeDropdown();
  };

  return (
    <div className={styles.sort__row}>
      <p className={styles.sort__by}>SORT BY</p>
      <Dropdown isShow={isDropdownOpened} closeDropdown={closeDropdown}>
        <Dropdown.Button view="filter" onClick={toggleDropdown}>
          {sortItems.find((el) => el.value === sort)?.name}
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
