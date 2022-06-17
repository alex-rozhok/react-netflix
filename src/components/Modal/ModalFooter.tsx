import React, { ReactElement, ReactNode } from 'react';
import styles from './style.module.less';

export interface IFooterProps {
  children: ReactNode;
}

export const Footer = ({ children }: IFooterProps): ReactElement => (
  <div className={styles.modal__footer}>{children}</div>
);
