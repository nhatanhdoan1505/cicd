import { createAction } from 'redux-actions';

export const setAuthenticated = createAction('AUTHENTICATION_AUTHENTICATED');
export const logout = createAction('AUTHENTICATION_LOGOUT');
export const loadAuthentication = createAction('AUTHENTICATION_LOAD');
