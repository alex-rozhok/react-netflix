import React from 'react';
import styles from './style.module.less';
import { Logo } from '../Logo';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
};
