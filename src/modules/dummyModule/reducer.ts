import { State } from './state';
import { Reducer } from 'redux';
import { Actions, ActionTypes } from './actions';

const initialState: State = {
  isLoading: false,
};

export const reducer: Reducer<State, Actions> = (
  state: State = initialState,
  action: Actions,
): State => {
  switch (action.type) {
    case ActionTypes.REQUEST_TAKE_EVERY:
      return { ...state, isLoading: true };
    case ActionTypes.SUCCESS:
      return { ...state, isLoading: false };
    case ActionTypes.FAIL:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
