import React, { ChangeEventHandler, ReactElement } from 'react';
import styles from '../style.module.less';

interface IInputProps {
  type?: 'text' | 'number' | 'search' | 'search';
  value: string;
  placeholder?: string;
  icon?: ReactElement;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  type,
  value,
  onChange,
  icon,
  ...attr
}: IInputProps): ReactElement => (
  <div className={styles.field__wrapper}>
    <input
      type={type}
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
