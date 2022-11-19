import {UserAction, UserActionTypes, UserState} from './types';

const initialState: UserState = null;

export default function userReducer(
  state = initialState,
  action: UserAction,
): UserState {
  switch (action.type) {
    case UserActionTypes.SET_USER_DATA:
      if (action.payload) {
        return {...state, ...action.payload};
      } else {
        return null;
      }
    default:
      return state;
  }
}
