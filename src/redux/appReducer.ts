import CNST from '@constants';
import { IAppState } from 'interfaces';

const initialState: IAppState = {
  loading: false,
  alert: {
    text: '',
    status: '',
  },
};
export const appReducer = (
  state = initialState,
  { type, payload },
): IAppState => {
  switch (type) {
    case CNST.TYPE.LOADER.SHOW:
      return { ...state, loading: true };
    case CNST.TYPE.LOADER.HIDE:
      return { ...state, loading: false };
    case CNST.TYPE.ALERT.SHOW:
      return {
        ...state,
        alert: { text: payload.text, status: payload.status },
      };
    case CNST.TYPE.ALERT.HIDE:
      return { ...state, alert: { text: '', status: '' } };
    default:
      return state;
  }
};
