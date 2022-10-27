import {AppThunkAction} from '../types';
import {LoginAction, LoginActionTypes} from './types';
import loginRequest from '../../service/login';

export const login =
  (username: string, password: string): AppThunkAction =>
  async dispatch => {
    const data = await loginRequest(username, password);
    dispatch(setToken(data.token));
  };

export const logout = (): LoginAction => setToken(null);

export const setToken = (token: string | null): LoginAction => ({
  type: LoginActionTypes.SET_TOKEN,
  payload: token,
});
