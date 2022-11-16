import {AppThunkAction} from '../types';
import getEventListRequest, {
  GetEventListResponse,
} from '@/service/getEventList';
import {thisMonth, thisWeek, today, tomorrow} from '@/utils/formatTime';
import {EventListAction, EventListActionTypes, EventListSearch} from './types';

export const fetchEventData =
  (): AppThunkAction => async (dispatch, getState) => {
    const search = getState().eventList.search;
    const searchParams = {
      ...search,
      channels: search.channels?.join(','),
    };
    const data = await getEventListRequest(searchParams);
    return dispatch(setEventListData(data));
  };

export const setEventListData = (
  data: GetEventListResponse | null,
): EventListAction => ({
  type: EventListActionTypes.SET_EVENT_LIST_DATA,
  payload: data,
});

export const setEventListSearchChannels = (
  data: number[] | null,
): EventListAction => ({
  type: EventListActionTypes.SET_EVENT_LIST_SEARCH_CHANNELS,
  payload: data,
});

export const setEventListSearchTime = (
  data: Pick<EventListSearch, 'before' | 'after'>,
): EventListAction => ({
  type: EventListActionTypes.SET_EVENT_LIST_SEARCH_TIME,
  payload: data,
});

export const setEventListSearchToday = (): EventListAction =>
  setEventListSearchTime(today());

export const setEventListSearchTomorrow = (): EventListAction =>
  setEventListSearchTime(tomorrow());

export const setEventListSearchThisWeek = (): EventListAction =>
  setEventListSearchTime(thisWeek());

export const setEventListSearchThisMonth = (): EventListAction =>
  setEventListSearchTime(thisMonth());

export const setEventListSearchAll = (): EventListAction =>
  setEventListSearchTime({});
