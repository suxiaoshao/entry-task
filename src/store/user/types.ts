import {ActionEnum} from '../types';

export type LoginState = {
  token: string;
  user: {id: number; username: string; email: string; avatar: string};
} | null;

export enum LoginActionTypes {
  SET_DATA = 'SET_DATA',
}

export type LoginAction = ActionEnum<LoginActionTypes.SET_DATA, LoginState>;
