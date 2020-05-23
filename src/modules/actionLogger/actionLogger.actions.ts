import { Action } from 'redux';

export enum ActionLoggerActionTypes {
  LOG_ACTION = 'LOG_ACTION',
  RESET_LOGGER = 'RESET_LOGGER',
}

export interface LogAction extends Action {
  type: ActionLoggerActionTypes.LOG_ACTION;
  payload: { action: string };
}

export interface ResetLogger extends Action {
  type: ActionLoggerActionTypes.RESET_LOGGER;
}

export type ActionLoggerActions = LogAction | ResetLogger;
