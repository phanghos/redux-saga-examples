import { State } from 'modules/dummyModule/state';
import { combineReducers } from 'redux';
import { reducer } from 'modules/dummyModule/reducer';
import { ActionLoggerState } from 'modules/actionLogger/actionLogger.state';
import { actionLoggerReducer } from 'modules/actionLogger/actionLogger.reducer';

export interface ApplicationState {
  dummyState: State;
  actionLogger: ActionLoggerState;
}

export const rootReducer = combineReducers<ApplicationState>({
  dummyState: reducer,
  actionLogger: actionLoggerReducer,
});
