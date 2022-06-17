import React, { ReactElement } from 'react';
import styles from './style.module.less';

export const Logo = (): ReactElement => (
  <a className={styles.logo} href="/">
    <strong>netflix</strong>roulette
  </a>
);
