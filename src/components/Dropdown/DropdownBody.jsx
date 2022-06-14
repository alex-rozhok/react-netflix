import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.module.less';
import { Button } from '@components';

export const Body = ({
  children,
  isShow,
  closeDropdown,
  classes,
  closeButton,
}) => (
  <>
    {isShow && (
      <div className={classNames(styles.dropdown__wrapper, classes)}>
        {closeButton && (
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

Body.defaultProps = {
  classes: '',
};

Body.propTypes = {
  children: PropTypes.node,
  isShow: PropTypes.bool.isRequired,
  closeButton: PropTypes.bool,
  classes: PropTypes.string,
  closeDropdown: PropTypes.func,
};
