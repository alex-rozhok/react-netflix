import React, { FC, ReactElement } from 'react';
import styles from './style.module.less';

interface IPosterProps {
  poster: string;
  title: string;
}

export const Poster = ({ poster, title }: IPosterProps): ReactElement => (
  <picture className={styles.poster}>
    <img className={styles.img} src={poster} alt={title} />
  </picture>
);
