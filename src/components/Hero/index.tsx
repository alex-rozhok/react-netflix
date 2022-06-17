import React, { ReactElement } from 'react';
import { useAppContext } from '@hooks';
import { Movie } from './Movie';
import { Home } from './Home';

export const Hero = (): ReactElement => {
  const {
    state: { selectedMovie },
  } = useAppContext();

  return <>{selectedMovie ? <Movie /> : <Home />}</>;
};
