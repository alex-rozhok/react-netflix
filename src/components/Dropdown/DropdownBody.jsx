import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';
import { Button } from '../../UI';

export const Body = ({
  children,
  isShow,
  closeDropdown,
  classes,
  closeButton,
}) => {
  return (
    <>
      {isShow && (
        <div className={`${styles.dropdown__wrapper} ${classes}`}>
          {closeButton && (
            <div className={styles.dropdown__head}>
              <Button
                type="button"
                onClick={closeDropdown}
                view="close"
              ></Button>
            </div>
          )}
          <ul className={styles.dropdown__body}>
            {children.map((item, index) => {
              return <li key={index}>{item}</li>;
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

Body.propTypes = {
  children: PropTypes.node,
  isShow: PropTypes.bool.isRequired,
  closeButton: PropTypes.bool,
  classes: PropTypes.string,
  closeDropdown: PropTypes.func,
};
