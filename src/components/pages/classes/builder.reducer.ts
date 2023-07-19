import { Action } from '@ngrx/store';

export const initialState: string = '';

export function updateReducer(state = initialState, action: Action) {
  switch (action.type) {
    case '[Character Builder] Update':
      return JSON.stringify(Date.now());
    default:
      return state;
  }
}
