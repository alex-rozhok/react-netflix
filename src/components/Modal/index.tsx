import React, { FC, ReactElement, useEffect } from 'react';
import styles from './style.module.less';
import { Portal } from './Portal';
import { Body, IBodyProps } from './ModalBody';
import { Footer, IFooterProps } from './ModalFooter';
import { Button } from '@components';

type ModalFC<T> = React.FC<T> & {
  Body: React.FC<IBodyProps>;
  Footer: React.FC<IFooterProps>;
};

export interface IModal {
  children: ReactElement[] | ReactElement;
  closeModal: () => void;
  isOpen: boolean;
}

const ModalWrapper: FC<IModal> = ({ children, closeModal, isOpen }) => {
  useEffect((): (() => void) => {
    if (isOpen) document.body.style.overflow = 'hidden';
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

const ModalMemo = React.memo(ModalWrapper);
export const Modal: ModalFC<IModal> = (props) => <ModalMemo {...props} />;

Modal.Body = Body;
Modal.Footer = Footer;
