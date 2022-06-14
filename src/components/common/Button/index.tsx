import React, { FC, MouseEventHandler, ReactNode } from 'react';
import styles from './style.module.less';

export interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  view: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  form?: string;
  value?: string;
}

export const Button: FC<ButtonProps> = ({ children, type, view, ...rest }) => {
  return (
    <button type={type} className={styles[view]} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  view: 'button',
  type: 'button',
};
