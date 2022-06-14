import React, { FC, ReactElement, useEffect } from 'react';
import styles from './style.module.less';
import { Portal } from './Portal';
import { Body, BodyProps } from './ModalBody';
import { Footer, FooterProps } from './ModalFooter';
import { Button } from '@components';

type ModalFC<P = Record<string, unknown>> = React.FC<P> & {
  Footer: React.FC<FooterProps>;
  Body: React.FC<BodyProps>;
};

export interface IModal {
  children: ReactElement[] | ReactElement;
  closeModal: () => void;
  isOpen: boolean;
}

const ModalWrapper: FC<IModal> = ({ children, closeModal, isOpen }) => {
  useEffect((): (() => void) => {
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

const ModalMemo = React.memo(ModalWrapper);
export const Modal: ModalFC<IModal> = (props) => <ModalMemo {...props} />;

Modal.Body = Body;
Modal.Footer = Footer;
