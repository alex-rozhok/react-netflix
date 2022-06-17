import React, { ReactElement } from 'react';
import styles from './style.module.less';
import { Logo } from '@components';

export const Footer = (): ReactElement => (
  <footer className={styles.footer}>
    <Logo />
  </footer>
);
