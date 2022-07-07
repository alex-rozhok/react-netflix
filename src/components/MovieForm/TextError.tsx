import React from 'react';
import styles from './style.module.less';

interface ITextError {
  children: string;
}

export const TextError = ({ children }: ITextError) => (
  <div className={styles.form__error}>{children}</div>
);
