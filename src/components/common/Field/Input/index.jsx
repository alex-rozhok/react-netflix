import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style.module.less';

export const Input = ({ value, onChange, icon, ...attr }) => (
  <div className={styles.field__wrapper}>
    <input
      className={styles.field}
      value={value}
      onChange={onChange}
      {...attr}
    />
    {icon && <span className={styles.field__icon}>{icon}</span>}
  </div>
);

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.node,
};
