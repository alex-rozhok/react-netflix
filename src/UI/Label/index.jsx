import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';

export const Label = ({ children, label }) => {
  return (
    <label className={styles.label}>
      {label}
      <div className={styles.label__field}>{children}</div>
    </label>
  );
};

Label.defaultProps = {
  type: 'text',
};

Label.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};
