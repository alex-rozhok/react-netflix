import React, { ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.less';
import { Button } from '@components';
import { useDropdownContext } from './DropdownContext';

export interface IBodyProps {
  children: ReactElement[];
  classes?: string;
}

export const Body = ({ children, classes }: IBodyProps): ReactElement => {
  const { isShow, isCloseButton, closeDropdown } = useDropdownContext();
  return (
    <>
      {isShow && (
        <div className={classNames(styles.dropdown__wrapper, classes)}>
          {isCloseButton && (
            <div className={styles.dropdown__head}>
              <Button type="button" onClick={closeDropdown} view="close">
                <span className="sr-only">close dropdown</span>
              </Button>
            </div>
          )}
          <ul className={styles.dropdown__body}>
            {children.map((item) => {
              return <li key={item.key}>{item}</li>;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

Body.defaultProps = {
  classes: '',
};
