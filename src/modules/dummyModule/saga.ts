import {
  takeEvery,
  takeLatest,
  take,
  put,
  delay,
  call,
  fork,
} from 'redux-saga/effects';
import { ActionTypes } from './actions';

function* dummyFetch() {
  yield delay(1500);
  yield put({ type: ActionTypes.SUCCESS });
}

export function* watchTakeEvery() {
  yield takeEvery(ActionTypes.REQUEST_TAKE_EVERY, dummyFetch);
}

export function* watchTakeLatest() {
  yield takeLatest(ActionTypes.REQUEST_TAKE_LATEST, dummyFetch);
}

export function* watchTake() {
  while (true) {
    yield take(ActionTypes.REQUEST_TAKE);
    yield fork(dummyFetch);
  }
}
