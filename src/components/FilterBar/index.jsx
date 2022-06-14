import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.module.less';
import { Sort, FilterList } from '@components';

export const FilterBar = ({ genres, changeFilter, changeSort, sortBy }) => (
  <section className="container">
    <div className={classNames(styles.filterbar, 'row', 'space-between')}>
      <FilterList genres={genres} changeFilter={changeFilter} />
      <Sort changeSort={changeSort} sortBy={sortBy} />
    </div>
  </section>
);

FilterBar.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFilter: PropTypes.func.isRequired,
  changeSort: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};
