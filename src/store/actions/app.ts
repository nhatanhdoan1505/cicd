import { createAction } from 'redux-actions';
import { Notification } from 'store/reducers/app';

export const notification = createAction<Notification>('APP_NOTIFICATION');
export const resetNotification = createAction('APP_RESET_NOTIFICATION');
export const setAuthLoaded = createAction<boolean>('APP_SET_AUTH_LOADED');
export const setAppLoading = createAction<boolean>('APP_SET_APP_LOADING');
