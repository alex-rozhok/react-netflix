import React, { ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.less';
import { Sort, FilterList } from '@components';

export const FilterBar = (): ReactElement => (
  <section className="container">
    <div className={classNames(styles.filterbar, 'row', 'space-between')}>
      <FilterList />
      <Sort />
    </div>
  </section>
);
