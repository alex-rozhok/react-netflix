import { useSelector } from 'react-redux';
import { IState } from '@interfaces';

export const useAppState = () => useSelector((state: IState) => state.app);
