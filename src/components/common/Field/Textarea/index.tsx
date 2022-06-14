import React, { FC } from 'react';
import styles from '../style.module.less';

interface TextAreaProps {
  value: string;
  placeholder?: string;
  onChange: () => void;
}

export const Textarea: FC<TextAreaProps> = ({ value, onChange, ...attr }) => (
  <div className={styles.field__wrapper}>
    <textarea
      className={styles.field__textarea}
      value={value}
      onChange={onChange}
      {...attr}
    />
  </div>
);
