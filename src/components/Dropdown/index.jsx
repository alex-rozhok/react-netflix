import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';
import { Button } from '../../UI';
import { Body } from './DropdownBody';

export const Dropdown = ({ children, isShow, closeDropdown }) => {
  const dropdown = useRef();

  const clickOutside = useCallback((e) => {
    !dropdown.current.contains(e.target) && closeDropdown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isShow) {
      window.addEventListener('click', clickOutside);
    } else {
      window.removeEventListener('click', clickOutside);
    }
    return () => window.removeEventListener('click', clickOutside);
  }, [isShow, clickOutside]);

  return (
    <div ref={dropdown} className={styles.dropdown}>
      {children}
    </div>
  );
};

Dropdown.Button = Button;
Dropdown.Body = Body;

Dropdown.propTypes = {
  children: PropTypes.node,
  closeDropdown: PropTypes.func.isRequired,
  isShow: PropTypes.bool,
};
