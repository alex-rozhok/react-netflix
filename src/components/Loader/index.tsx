import React from 'react';
import styles from './style.module.less';

export const Loader = (): React.ReactElement => (
  <div className={styles.spinner} role="status">
    <span className="sr-only">Loading...</span>
  </div>
);
