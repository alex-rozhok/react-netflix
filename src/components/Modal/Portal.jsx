import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export const Portal = ({ children }) => {
  const modalWrap = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(modalWrap);
    return () => {
      document.body.removeChild(modalWrap);
    };
  }, [modalWrap]);
  return createPortal(children, modalWrap);
};

Portal.propTypes = {
  children: PropTypes.node,
};
