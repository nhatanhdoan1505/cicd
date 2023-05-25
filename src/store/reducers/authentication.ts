import { ROLE } from 'common/constants/role';
import { handleActions, Action } from 'redux-actions';
import * as actions from 'store/actions';

export interface IAuthState {
  token: string;
  refreshToken: string;
  email: string;
  username: string;
  role: ROLE;
}

export const initialState: IAuthState = {
  token: '',
  refreshToken: '',
  email: '',
  username: '',
  role: ROLE.ADMIN,
};

export default handleActions<IAuthState>(
  {
    [actions.setAuthenticated.toString()]: (state = initialState, action: Action<IAuthState>) => ({
      ...state,
      ...action.payload,
    }),
    [actions.logout.toString()]: () => ({ ...initialState }),
  },
  initialState
);
