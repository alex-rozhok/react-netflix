import React, { ReactElement, ReactNode } from 'react';
import styles from './style.module.less';

export interface IBodyProps {
  children: ReactNode;
  title?: string;
}

export const Body = ({ children, title }: IBodyProps): ReactElement => (
  <div className={styles.modal__body}>
    {title && <h3 className={styles.modal__title}>{title}</h3>}
    {children}
  </div>
);
