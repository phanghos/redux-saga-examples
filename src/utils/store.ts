import {
  Store,
  createStore,
  applyMiddleware,
  Middleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ApplicationState, rootReducer } from './root.reducer';
import rootSaga from './rootSaga';

let middlewares: Middleware[];

export default function configureStore(
  initialState?: ApplicationState,
): Store<ApplicationState> {
  if (__DEV__) {
    const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
    const Reactotron = require('reactotron-react-native').default;
    const reactotron = require('./ReactotronConfig').default;
    const sagaMonitor = Reactotron.createSagaMonitor();
    const saga = createSagaMiddleware({ sagaMonitor });
    const logger = require('redux-logger').default;

    middlewares = [reduxImmutableStateInvariant, saga, logger];

    const store = createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(...middlewares), reactotron.createEnhancer()),
    );

    saga.run(rootSaga);

    return store;
  }

  const saga = createSagaMiddleware();
  middlewares = [saga];

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );

  saga.run(rootSaga);

  return store;
}
