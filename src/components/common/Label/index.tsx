import React from 'react';
import styles from './style.module.less';

export interface ILabelProps {
  children: React.ReactNode[];
  target: string;
}

export const Label = ({
  children,
  target,
}: ILabelProps): React.ReactElement => (
  <div>
    <label htmlFor={target} className={styles.label}>
      {children[0]}
    </label>
    <div className={styles.label__field}>{children[1]}</div>
  </div>
);
