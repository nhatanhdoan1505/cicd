import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store: any = createStore(reducers, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const storeGlobal = makeStore();
export type RootState = ReturnType<typeof storeGlobal.getState>;

export const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV !== 'production' });
