import {AppThunkAction} from '../types';
import {UserAction, UserActionTypes} from './types';
import loginRequest, {LoginResponse} from '../../service/login';
import {toastResponse} from '@/service/request';

export const login =
  (username: string, password: string): AppThunkAction =>
  async dispatch => {
    const data = await loginRequest(username, password);
    toastResponse(data);
    if (data.type === 'ok') {
      return dispatch(setUserData(data.payload));
    }
  };

export const logout = (): UserAction => setUserData(null);

export const setUserData = (data: LoginResponse | null): UserAction => ({
  type: UserActionTypes.SET_USER_DATA,
  payload: data,
});
