import React, { FC, ReactElement } from 'react';
import styles from './style.module.less';

export interface LabelProps {
  children: ReactElement;
  label: string;
}

export const Label: FC<LabelProps> = ({ children, label }) => (
  <label className={styles.label}>
    {label}
    <div className={styles.label__field}>{children}</div>
  </label>
);
