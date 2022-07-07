import { useSelector } from 'react-redux';
import { IState } from '@interfaces';

export const useMoviesState = () =>
  useSelector((state: IState) => state.movies);
