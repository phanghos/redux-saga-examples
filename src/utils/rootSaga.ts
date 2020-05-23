import { spawn } from 'redux-saga/effects';
import {
  watchTakeEvery,
  watchTakeLatest,
  watchTake,
} from 'modules/dummyModule/saga';
import { watchDispatchedActions } from 'modules/actionLogger/actionLogger.saga';

export default function* rootSaga() {
  yield spawn(watchTakeEvery);
  yield spawn(watchTakeLatest);
  yield spawn(watchTake);
  yield spawn(watchDispatchedActions);
}
