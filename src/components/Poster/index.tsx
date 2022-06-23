import React from 'react';
import styles from './style.module.less';
import imgPlaceholder from '@img/image-not-found.jpg';
interface IPosterProps {
  poster: string;
  title: string;
}

export const Poster = ({ poster, title }: IPosterProps): React.ReactElement => {
  const setImgPlaceholder = (e: React.ChangeEvent<HTMLImageElement>): void => {
    e.target.src = imgPlaceholder;
  };

  return (
    <picture className={styles.poster}>
      <img
        className={styles.img}
        src={poster ?? imgPlaceholder}
        alt={title}
        onError={setImgPlaceholder}
      />
    </picture>
  );
};
