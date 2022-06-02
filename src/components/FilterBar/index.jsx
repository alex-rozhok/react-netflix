import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';
import { Sort, FilterList } from '../index';

export const FilterBar = ({ genres, changeFilter, changeSort, sortBy }) => {
  return (
    <section className="container">
      <div className={`row space-between ${styles.filterbar}`}>
        <FilterList genres={genres} changeFilter={changeFilter} />
        <Sort changeSort={changeSort} sortBy={sortBy} />
      </div>
    </section>
  );
};

FilterBar.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFilter: PropTypes.func.isRequired,
  changeSort: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};
