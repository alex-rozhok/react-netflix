import React, { ReactElement } from 'react';
import styles from './style.module.less';

export interface ILabelProps {
  children: ReactElement;
  label: string;
}

export const Label = ({ children, label }: ILabelProps): ReactElement => (
  <label className={styles.label}>
    {label}
    <div className={styles.label__field}>{children}</div>
  </label>
);
