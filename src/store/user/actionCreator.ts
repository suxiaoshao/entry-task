import {AppThunkAction} from '../types';
import {UserAction, UserActionTypes} from './types';
import loginRequest, {LoginResponse} from '../../service/login';

export const login =
  (username: string, password: string): AppThunkAction =>
  async dispatch => {
    const data = await loginRequest(username, password);
    return dispatch(setUserData(data));
  };

export const logout = (): UserAction => setUserData(null);

export const setUserData = (data: LoginResponse | null): UserAction => ({
  type: UserActionTypes.SET_USER_DATA,
  payload: data,
});
