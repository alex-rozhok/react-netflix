import React, { ReactElement, useEffect, useRef } from 'react';
import styles from './style.module.less';
import { Body, IBodyProps } from './DropdownBody';
import { Button } from '@common';
import { DropdownProvider } from './DropdownContext';
import { IButtonProps } from '@common/Button';

export type DropdownFC<T> = React.FC<T> & {
  Button: React.FC<IButtonProps>;
  Body: React.FC<IBodyProps>;
};

export interface IDropdown {
  children: ReactElement[];
  closeDropdown: () => void;
  isShow: boolean;
  isCloseButton?: boolean;
}

export const DropdownWrapper = ({
  children,
  isShow,
  closeDropdown,
  isCloseButton,
}: IDropdown) => {
  const dropdown = useRef<HTMLDivElement>(null);

  const clickOutside = (e: MouseEvent) => {
    if (dropdown.current) {
      !dropdown.current.contains(e.target as Node) && closeDropdown();
    }
  };

  useEffect(() => {
    isShow && window.addEventListener('click', clickOutside, true);
    return () => window.removeEventListener('click', clickOutside, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  const value = {
    isShow,
    closeDropdown,
    isCloseButton,
  };
  return (
    <DropdownProvider value={value}>
      <div ref={dropdown} className={styles.dropdown}>
        {children}
      </div>
    </DropdownProvider>
  );
};

const DropdownMemo = React.memo(DropdownWrapper);
export const Dropdown = ({ children, ...props }: IDropdown) => (
  <DropdownMemo {...props}>{children}</DropdownMemo>
);

Dropdown.Button = Button;
Dropdown.Body = Body;
