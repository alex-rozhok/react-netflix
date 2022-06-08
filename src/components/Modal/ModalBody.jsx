import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';

export const Body = ({ children, title }) => {
  return (
    <div className={styles.modal__body}>
      {title && <h3 className={styles.modal__title}>{title}</h3>}
      {children}
    </div>
  );
};

Body.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
