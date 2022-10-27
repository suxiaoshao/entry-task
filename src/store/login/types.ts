import {ActionEnum} from '../types';

export type LoginState = {
  token: string | null;
};

export enum LoginActionTypes {
  SET_TOKEN = 'SET_TOKEN',
}

export type LoginAction = ActionEnum<LoginActionTypes.SET_TOKEN, string | null>;
