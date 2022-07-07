import React, { ChangeEventHandler, ReactElement } from 'react';
import styles from '../style.module.less';

interface IInputProps {
  icon?: ReactElement;
  onChange: ChangeEventHandler<HTMLInputElement>;
  [key: string]: any;
}
export interface TextInput extends IInputProps {
  type: 'text';
  value: string;
}
export interface NumberInput extends IInputProps {
  type: 'number';
  value: number;
}

export type TInputProps = TextInput | NumberInput;

export const Input = ({
  type,
  value,
  onChange,
  icon,
  ...attr
}: TInputProps): ReactElement => (
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
