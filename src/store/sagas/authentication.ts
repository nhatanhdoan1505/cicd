import jwt_decode from 'jwt-decode';
import { takeEvery, put } from 'redux-saga/effects';
import { loadAuthentication, logout, setAuthenticated, setAuthLoaded } from 'store/actions';
import { appConfig } from '@configs/app';
import { initialState } from 'store/reducers/authentication';
import { Action } from 'redux-actions';

function* handleLoadAuthentication() {
  let authToken = window.localStorage.getItem(appConfig.authSecretKey);

  if (!authToken) {
    authToken = window.sessionStorage.getItem(appConfig.authSecretKey);
  }

  let payloadData = { ...initialState };

  if (authToken) {
    payloadData = JSON.parse(authToken);
  }

  yield put(setAuthenticated(payloadData));
}

function* trackSetAuthentication(action: Action<any>) {
  let payloadString = action.payload;

  if (payloadString.token) {
    const decoded: any = jwt_decode(payloadString.token);
    payloadString = { ...payloadString, email: decoded.email, username: decoded.fullName, role: decoded.role };

    window.localStorage.setItem(appConfig.authSecretKey, JSON.stringify(payloadString));
  }

  yield put(setAuthLoaded(true));
}

function* trackLogout() {
  window.localStorage.removeItem(appConfig.authSecretKey);
}

export default function* watchAuthentication() {
  yield takeEvery(loadAuthentication.toString(), handleLoadAuthentication);
  yield takeEvery(setAuthenticated.toString(), trackSetAuthentication);
  yield takeEvery(logout.toString(), trackLogout);
}
