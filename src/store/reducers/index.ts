import { combineReducers } from 'redux';

import app from './app';
import authentication from './authentication';

const reducers = combineReducers({
  app,
  authentication,
});

export default reducers;
