import {AppThunkAction} from '../types';
import getEventListRequest, {
  GetEventListRequest,
  GetEventListResponse,
} from '@/service/getEventList';
import {
  EventListAction,
  EventListActionTypes,
  EventListSearch,
  EventListSearchTimeValue,
} from './types';
import {thisMonth, thisWeek, today, tomorrow} from '@/utils/time';

export const setSearchAndFetchEventList =
  (data: EventListSearch | null): AppThunkAction =>
  async dispatch => {
    dispatch(setEventListSearch(data));
    const searchParams = getRequestData(data);
    const result = await getEventListRequest(searchParams);
    return dispatch(setEventListData(result));
  };

export const fetchEventData =
  (): AppThunkAction => async (dispatch, getState) => {
    const search = getState().eventList.search;
    const searchParams = getRequestData(search);
    const data = await getEventListRequest(searchParams);
    return dispatch(setEventListData(data));
  };

export const fetchEventDataMore =
  (): AppThunkAction => async (dispatch, getState) => {
    const search = getState().eventList.search;
    const count = getState().eventList.data?.events.length;
    const searchParams = getRequestData(search, count);
    const data = await getEventListRequest(searchParams);
    return dispatch(setEventListDataMore(data));
  };
function getRequestData(
  search: EventListSearch | null,
  offset?: number,
): GetEventListRequest {
  const result: GetEventListRequest = {};
  if (search?.channels && search.channels.length >= 1) {
    result.channels = search.channels.join(',');
  }
  if (search?.time) {
    let time: EventListSearchTimeValue | null = null;
    switch (search.time.type) {
      case 'anytime':
        break;
      case 'later':
        result.after = search.time.payload.after;
        result.before = search.time.payload.before;
        break;
      case 'today':
        time = today();
        break;
      case 'tomorrow':
        time = tomorrow();
        break;
      case 'thisWeek':
        time = thisWeek();
        break;
      case 'thisMonth':
        time = thisMonth();
    }
    if (time) {
      result.after = time.after;
      result.before = time.before;
    }
  }
  if (offset) {
    result.offset = offset;
  }
  return result;
}
export const setEventListData = (
  data: GetEventListResponse | null,
): EventListAction => ({
  type: EventListActionTypes.SET_EVENT_LIST_DATA,
  payload: data,
});

export const setEventListDataMore = (
  data: GetEventListResponse,
): EventListAction => ({
  type: EventListActionTypes.SET_EVENT_LIST_DATA_MORE,
  payload: data,
});

export const setEventListSearch = (
  data: EventListSearch | null,
): EventListAction => ({
  type: EventListActionTypes.SET_EVENT_LIST_SEARCH,
  payload: data,
});
