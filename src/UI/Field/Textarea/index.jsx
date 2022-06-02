import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style.module.less';

export const Textarea = ({ value, onChange, ...attr }) => {
  return (
    <div className={styles.field__wrapper}>
      <textarea
        className={styles.field__textarea}
        value={value}
        onChange={onChange}
        {...attr}
      />
    </div>
  );
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
