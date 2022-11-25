import {ResponseTypeWithStatus} from '@/hooks/useRequest';
import {GetEventListResponse} from '@/service/getEventList';
import {GetUserEventsType} from '@/service/getUserEvents';
import {LoginResponse} from '@/service/login';
import {Enum} from '@/utils/types';

export interface UserState extends Partial<LoginResponse> {
  tab: GetUserEventsType;
  likedEvents: EventListWithStatus;
  goingEvents: EventListWithStatus;
  pastEvents: EventListWithStatus;
  likedMore: ResponseTypeWithStatus<{}>;
  goingMore: ResponseTypeWithStatus<{}>;
  pastMore: ResponseTypeWithStatus<{}>;
}

export type EventListWithStatus = ResponseTypeWithStatus<GetEventListResponse>;

export enum UserActionTypes {
  SET_USER_DATA = 'SET_USER_DATA',
  SET_USER_TAB = 'SET_USER_TAB',
  SET_USER_EVENT_LIST = 'SET_USER_EVENT_LIST',
  SET_USER_EVENT_LIST_MORE = 'SET_USER_EVENT_LIST_MORE',
}

export type UserAction =
  | Enum<UserActionTypes.SET_USER_DATA, LoginResponse | null>
  | Enum<UserActionTypes.SET_USER_TAB, GetUserEventsType>
  | Enum<
      UserActionTypes.SET_USER_EVENT_LIST,
      {data: EventListWithStatus; tab: GetUserEventsType}
    >
  | Enum<
      UserActionTypes.SET_USER_EVENT_LIST_MORE,
      {data: EventListWithStatus; tab: GetUserEventsType}
    >;
