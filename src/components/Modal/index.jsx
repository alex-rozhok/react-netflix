import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.less';
import { Portal } from './Portal';
import { Body } from './ModalBody';
import { Footer } from './ModalFooter';
import { Button } from '@components';
export const Modal = ({ children, closeModal, isOpen }) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
    return () => (document.body.style.overflow = '');
  }, [isOpen]);
  return (
    <>
      {isOpen && (
        <Portal>
          <div className={styles.modal}>
            <div className={styles.modal__window}>
              <div className={styles.modal__header}>
                <Button onClick={closeModal} view="close_big">
                  <span className="sr-only">close modal</span>
                </Button>
              </div>
              {children}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

Modal.Body = Body;
Modal.Footer = Footer;

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  acceptButton: PropTypes.node,
  cancelButton: PropTypes.node,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
};
