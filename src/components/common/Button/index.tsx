import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './style.module.less';

export interface IButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  view: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  form?: string;
  value?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  type = 'button',
  view,
  ...rest
}: IButtonProps): React.ReactElement => {
  return (
    <button type={type} className={styles[view]} {...rest}>
      {children}
    </button>
  );
};
