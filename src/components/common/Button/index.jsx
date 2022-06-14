import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';

export const Button = ({ children, type, view, ...rest }) => {
  const style = view ? styles[view] : styles.button;
  return (
    <button type={type} className={style} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  view: PropTypes.string,
};
