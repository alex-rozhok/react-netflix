import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../index';
import { CaretDown } from '../../icons';
import styles from './style.module.less';
import { Button } from '../../UI';

export const Sort = ({ changeSort, sortBy }) => {
  const [isSortDropdown, setIsSortDropdown] = useState(false);
  const sortItems = [
    { value: 'release_date', name: 'RELEASE DATE' },
    { value: 'title', name: 'NAME' },
  ];
  const changeHandler = (e) => {
    changeSort(e.target.value);
    setIsSortDropdown(false);
  };
  return (
    <div className={styles.sort__row}>
      <p className={styles.sort__by}>SORT BY</p>
      <Dropdown
        isShow={isSortDropdown}
        closeDropdown={() => setIsSortDropdown(false)}
      >
        <Dropdown.Button onClick={() => setIsSortDropdown(!isSortDropdown)}>
          {sortItems.find((el) => el.value === sortBy).name}
          <span className={styles.sort__toggle_icon}>
            <CaretDown />
          </span>
        </Dropdown.Button>
        <Dropdown.Body classes={styles.sort__dropdown} isShow={isSortDropdown}>
          {sortItems.map((item) => (
            <Button
              key={item.value}
              value={item.value}
              onClick={changeHandler}
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

Sort.propTypes = {
  changeSort: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};
