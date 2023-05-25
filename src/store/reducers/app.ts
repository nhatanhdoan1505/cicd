import { NotificationPlacement, IconType } from 'antd/lib/notification';
import { ReactNode } from 'react';
import { handleActions, Action } from 'redux-actions';

import * as actions from 'store/actions';

export interface IAppState {
  notification: Notification;
  authLoaded: boolean;
}

export type Notification = {
  message?: string;
  description?: string;
  placement?: NotificationPlacement | 'center';
  isOpen: boolean;
  type: IconType;
  icon?: ReactNode;
};

const initialState: IAppState = {
  notification: {
    isOpen: false,
    type: 'info',
    description: '',
    message: '',
    placement: 'topRight',
  },
  authLoaded: false,
};

export default handleActions<IAppState>(
  {
    [actions.notification.toString()]: (state = initialState, action: Action<any>) => ({
      ...state,
      notification: { ...state.notification, ...action.payload },
    }),
    [actions.resetNotification.toString()]: (state = initialState) => ({
      ...state,
      notification: initialState.notification,
    }),
    [actions.setAuthLoaded.toString()]: (state = initialState, action: Action<any>) => ({
      ...state,
      authLoaded: action.payload,
    }),
  },
  initialState
);
