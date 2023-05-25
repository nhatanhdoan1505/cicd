import { all, fork } from 'redux-saga/effects';

import watchAuthentication from './authentication';

export default function* rootSaga() {
  yield all([fork(watchAuthentication)]);
}
