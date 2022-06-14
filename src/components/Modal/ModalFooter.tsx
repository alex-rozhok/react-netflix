import React, { FC, ReactNode } from 'react';
import styles from './style.module.less';

export interface FooterProps {
  children: ReactNode;
}

export const Footer: FC<FooterProps> = ({ children }) => (
  <div className={styles.modal__footer}>{children}</div>
);
