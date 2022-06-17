import React, { ChangeEventHandler, FC } from 'react';
import styles from '../style.module.less';

interface ITextAreaProps {
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export const Textarea: FC<ITextAreaProps> = ({ value, onChange, ...attr }) => (
  <div className={styles.field__wrapper}>
    <textarea
      className={styles.field__textarea}
      value={value}
      onChange={onChange}
      {...attr}
    />
  </div>
);
