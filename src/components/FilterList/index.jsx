import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../UI';
import styles from './style.module.less';

export const FilterList = ({ genres, changeFilter }) => {
  return (
    <ul className="row">
      {genres.map((genre) => {
        return (
          <li
            key={genre.name}
            className={`${styles.filter__item} ${
              genre.active ? styles.active : ''
            }`}
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
};

FilterList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFilter: PropTypes.func.isRequired,
};
