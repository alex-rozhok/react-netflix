import React, { createContext, ReactElement, useReducer } from 'react';
import PropTypes from 'prop-types';
import { reducer } from '@reducer';
import { data, genres } from '@data';

interface IAppProvider {
  children: ReactElement;
}

const initialState = {
  data,
  genres,
  movies: data,
  sort: 'release_date',
  selectedMovie: null,
};

export const AppContext = createContext(null);

export const AppContextProvider = ({
  children,
}: IAppProvider): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};
