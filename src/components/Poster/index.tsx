import React, { FC } from 'react';
import styles from './style.module.less';

interface PosterProps {
  poster: string;
  title: string;
}

export const Poster: FC<PosterProps> = ({ poster, title }) => (
  <picture className={styles.poster}>
    <img className={styles.img} src={poster} alt={title} />
  </picture>
);
