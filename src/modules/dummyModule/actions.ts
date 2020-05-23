import { Action } from 'redux';

export enum ActionTypes {
  REQUEST_TAKE_EVERY = 'REQUEST_TAKE_EVERY',
  REQUEST_TAKE_LATEST = 'REQUEST_TAKE_LATEST',
  REQUEST_TAKE = 'REQUEST_TAKE',
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
}

export interface RequestTakeEvery extends Action {
  type: ActionTypes.REQUEST_TAKE_EVERY;
}

export interface RequestTakeLatest extends Action {
  type: ActionTypes.REQUEST_TAKE_LATEST;
}

export interface RequestTake extends Action {
  type: ActionTypes.REQUEST_TAKE;
}

export interface Success extends Action {
  type: ActionTypes.SUCCESS;
}

export interface Fail extends Action {
  type: ActionTypes.FAIL;
}

export type Actions = RequestTakeEvery | Success | Fail;
