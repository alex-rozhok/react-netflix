import { FC, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

export const Portal: FC<PortalProps> = ({ children }) => {
  const modalWrap = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(modalWrap);
    return () => {
      document.body.removeChild(modalWrap);
    };
  }, [modalWrap]);
  return createPortal(children, modalWrap);
};
