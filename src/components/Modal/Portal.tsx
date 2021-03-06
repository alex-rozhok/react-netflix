import { ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  children: ReactElement;
}

export const Portal = ({ children }: IPortalProps): ReactElement => {
  const modalWrap = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(modalWrap);
    return () => {
      document.body.removeChild(modalWrap);
    };
  }, [modalWrap]);
  return createPortal(children, modalWrap);
};
