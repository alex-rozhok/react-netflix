import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.less';
import { useAppState } from '@hooks';

export const Alert = (): React.ReactElement => {
  const {
    alert: { text, status },
  } = useAppState();

  return <div className={classNames(styles.alert, styles[status])}>{text}</div>;
};
