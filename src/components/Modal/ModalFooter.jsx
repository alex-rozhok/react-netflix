import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';

export const Footer = ({ children }) => {
  return <div className={styles.modal__footer}>{children}</div>;
};

Footer.propTypes = {
  children: PropTypes.node,
};
