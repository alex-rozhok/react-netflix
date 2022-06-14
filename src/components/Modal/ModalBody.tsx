import React, { FC, ReactNode } from 'react';
import styles from './style.module.less';

export interface BodyProps {
  children: ReactNode;
  title?: string;
}

export const Body: FC<BodyProps> = ({ children, title }) => (
  <div className={styles.modal__body}>
    {title && <h3 className={styles.modal__title}>{title}</h3>}
    {children}
  </div>
);
