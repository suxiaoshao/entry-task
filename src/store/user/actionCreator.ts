import {AppThunkAction} from '../types';
import {LoginAction, LoginActionTypes} from './types';
import loginRequest, {LoginResponse} from '../../service/login';

export const login =
  (username: string, password: string): AppThunkAction =>
  async dispatch => {
    const data = await loginRequest(username, password);
    return dispatch(setToken(data));
  };

export const logout = (): LoginAction => setToken(null);

export const setToken = (data: LoginResponse | null): LoginAction => ({
  type: LoginActionTypes.SET_DATA,
  payload: data,
});
