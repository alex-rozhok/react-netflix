import React, { ChangeEventHandler, ReactElement } from 'react';
import styles from '../style.module.less';

interface IInputProps {
  icon?: ReactElement;
  onChange: ChangeEventHandler<HTMLInputElement>;
  [key: string]: any;
}
export interface ITextInput extends IInputProps {
  type: 'text';
  value: string;
}
export interface INumberInput extends IInputProps {
  type: 'number';
  value: number;
}

export type TInputProps = ITextInput | INumberInput;

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
