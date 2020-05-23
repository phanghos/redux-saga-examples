import { take, put } from 'redux-saga/effects';
import { ActionLoggerActionTypes } from './actionLogger.actions';
import { Action } from 'redux';

export function* watchDispatchedActions() {
  while (true) {
    const action: Action = yield take('*');
    if (
      action.type != ActionLoggerActionTypes.LOG_ACTION &&
      action.type != ActionLoggerActionTypes.RESET_LOGGER
    ) {
      yield put({
        type: ActionLoggerActionTypes.LOG_ACTION,
        payload: { action: action.type },
      });
    }
  }
}
