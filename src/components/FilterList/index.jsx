import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Button } from '@components';
import styles from './style.module.less';

let cx = classNames.bind(styles);

export const FilterList = ({ genres, changeFilter }) => (
  <ul className="row">
    {genres.map((genre) => {
      return (
        <li
          key={genre.name}
          className={cx('filter__item', { active: genre.active })}
        >
          <Button
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

FilterList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFilter: PropTypes.func.isRequired,
};
