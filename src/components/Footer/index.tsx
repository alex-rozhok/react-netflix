import React, { FC } from 'react';
import styles from './style.module.less';
import { Logo } from '@components';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <Logo />
  </footer>
);
