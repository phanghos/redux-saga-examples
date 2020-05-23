import { ActionLoggerState } from './actionLogger.state';
import { Reducer } from 'redux';
import {
  ActionLoggerActions,
  ActionLoggerActionTypes,
} from './actionLogger.actions';

const initialState: ActionLoggerState = {
  dispatchedActions: [],
};

export const actionLoggerReducer: Reducer<
  ActionLoggerState,
  ActionLoggerActions
> = (
  state: ActionLoggerState = initialState,
  action: ActionLoggerActions,
): ActionLoggerState => {
  switch (action.type) {
    case ActionLoggerActionTypes.LOG_ACTION:
      return {
        ...state,
        dispatchedActions: [...state.dispatchedActions, action.payload.action],
      };
    case ActionLoggerActionTypes.RESET_LOGGER:
      return initialState;
    default:
      return state;
  }
};
