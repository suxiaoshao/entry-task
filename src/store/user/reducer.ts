import {LoginAction, LoginActionTypes, LoginState} from './types';

const initialState: LoginState = null;

export default function loginReducer(
  state = initialState,
  action: LoginAction,
) {
  switch (action.type) {
    case LoginActionTypes.SET_DATA:
      if (action.payload) {
        return {...state, ...action.payload};
      } else {
        return null;
      }
    default:
      return state;
  }
}
