import React, { ReactElement } from 'react';
import { Movie } from './Movie';
import { Home } from './Home';
import { useMoviesState } from '@hooks';

export const Hero = (): ReactElement => {
  const { selectedMovie } = useMoviesState();
  return <>{selectedMovie ? <Movie /> : <Home />}</>;
};
