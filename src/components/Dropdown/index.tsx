import React, { FC, ReactElement, useEffect, useRef } from 'react';
import styles from './style.module.less';
import { Body, BodyProps } from './DropdownBody';
import { Button } from '@common';
import { DropdownProvider } from './DropdownContext';
import { ButtonProps } from 'components/common/Button';

export type DropdownFC<P = Record<string, unknown>> = React.FC<P> & {
  Button: React.FC<ButtonProps>;
  Body: React.FC<BodyProps>;
};

export interface IDropdown {
  children: ReactElement[];
  closeDropdown: () => void;
  isShow: boolean;
  isCloseButton?: boolean;
}

export const DropdownWrapper: FC<IDropdown> = ({
  children,
  isShow,
  closeDropdown,
  isCloseButton,
}) => {
  const dropdown = useRef<HTMLDivElement>(null);

  const clickOutside = (e: MouseEvent) => {
    if (dropdown.current) {
      !dropdown.current.contains(e.target) && closeDropdown();
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
export const Dropdown: DropdownFC<IDropdown> = (props) => (
  <DropdownMemo {...props} />
);

Dropdown.Button = Button;
Dropdown.Body = Body;
