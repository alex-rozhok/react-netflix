import React, { ReactElement } from 'react';
import { useContext, createContext } from 'react';
import { IDropdown } from './index';

type TValue = Omit<IDropdown, 'children'>;

interface IProvider {
  children: ReactElement;
  value: TValue;
}

const DropdownContext = createContext<TValue>({} as TValue);

export const DropdownProvider = ({
  children,
  value,
}: IProvider): ReactElement => {
  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => useContext(DropdownContext);
