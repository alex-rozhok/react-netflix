import React, { FC } from 'react';
import { useAppContext } from '@hooks';
import { Movie } from './Movie';
import { Home } from './Home';

export const Hero: FC = () => {
  const {
    state: { selectMovie },
  } = useAppContext();

  return <>{selectMovie ? <Movie /> : <Home />}</>;
};
