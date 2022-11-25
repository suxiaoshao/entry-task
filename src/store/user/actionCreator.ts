import {AppThunkAction} from '../types';
import {
  EventListWithStatus,
  UserAction,
  UserActionTypes,
  UserState,
} from './types';
import loginRequest, {LoginResponse} from '../../service/login';
import {toastResponse} from '@/service/request';
import getUserEvents, {
  GetUserEventsRequest,
  GetUserEventsType,
} from '@/service/getUserEvents';

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

export const setUserTab = (tab: GetUserEventsType): UserAction => ({
  type: UserActionTypes.SET_USER_TAB,
  payload: tab,
});

export const setUserEventList = (
  tab: GetUserEventsType,
  data: EventListWithStatus,
): UserAction => ({
  type: UserActionTypes.SET_USER_EVENT_LIST,
  payload: {tab, data},
});

export const setUserEventListMore = (
  tab: GetUserEventsType,
  data: EventListWithStatus,
): UserAction => ({
  type: UserActionTypes.SET_USER_EVENT_LIST_MORE,
  payload: {tab, data},
});

export const fetchUserEventList =
  (
    tab: GetUserEventsType,
    loading: boolean = false,
    more: boolean = false,
  ): AppThunkAction =>
  async (dispatch, getState) => {
    const oldData = getState().user;
    // loading
    if (loading) {
      if (more) {
        dispatch(setUserEventListMore(tab, {type: 'loading'}));
      } else {
        dispatch(setUserEventList(tab, {type: 'loading'}));
      }
    }

    const search = getRequestData(tab, oldData, more);
    const data = await getUserEvents(search);
    toastResponse(data);
    if (more) {
      return dispatch(setUserEventListMore(tab, data));
    }
    return dispatch(setUserEventList(tab, data));
  };

function getRequestData(
  tab: GetUserEventsType,
  data: UserState,
  more: boolean,
): GetUserEventsRequest {
  // 不需要获取全部数据
  if (!more) {
    return {
      type: tab,
    };
  }
  let eventListData: undefined | EventListWithStatus;
  switch (tab) {
    case 'liked':
      eventListData = data.likedEvents;
      break;
    case 'going':
      eventListData = data.goingEvents;
      break;
    case 'past':
      eventListData = data.pastEvents;
      break;
  }
  if (eventListData?.type === 'ok') {
    return {
      type: tab,
      offset: eventListData.payload.total,
    };
  }
  return {
    type: tab,
  };
}
