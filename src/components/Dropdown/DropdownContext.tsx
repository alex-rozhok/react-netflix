import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { createContext } from 'react';

const DropdownContext = createContext(null);

export const DropdownProvider = ({ children, value }) => {
  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => useContext(DropdownContext);

DropdownProvider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.object,
};
