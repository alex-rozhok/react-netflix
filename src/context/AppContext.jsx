import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { reducer } from '@reducer';
import { data, genres } from '@data';

const initialState = {
  data,
  genres,
  movies: data,
  sort: 'release_date',
  selectMovie: null,
};

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
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
