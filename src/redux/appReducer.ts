import { TActions } from '@actions';
import { IAppState } from 'interfaces';
import * as Types from './types';

const initialState: IAppState = {
  loading: false,
  alert: {
    text: '',
    status: '',
  },
};
export const appReducer = (
  state = initialState,
  action: TActions,
): IAppState => {
  switch (action.type) {
    case Types.LOADER_SHOW:
      return { ...state, loading: true };
    case Types.LOADER_HIDE:
      return { ...state, loading: false };
    case Types.ALERT_SHOW:
      return {
        ...state,
        alert: { text: action.text, status: action.status },
      };
    case Types.ALERT_HIDE:
      return { ...state, alert: { text: '', status: '' } };
    default:
      return state;
  }
};
