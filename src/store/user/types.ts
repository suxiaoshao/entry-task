import {Enum} from "@/utils/types";

export type UserState = {
  token: string;
  user: {id: number; username: string; email: string; avatar: string};
} | null;

export enum UserActionTypes {
  SET_USER_DATA = 'SET_USER_DATA',
}

export type UserAction = Enum<UserActionTypes.SET_USER_DATA, UserState>;
