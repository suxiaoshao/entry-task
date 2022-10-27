import {LoginAction, LoginActionTypes, LoginState} from './types';

const initialState: LoginState = {token: null};

export default function loginReducer(
  state = initialState,
  action: LoginAction,
) {
  switch (action.type) {
    case LoginActionTypes.SET_TOKEN:
      return {...state, token: action.payload};
    default:
      return state;
  }
}
