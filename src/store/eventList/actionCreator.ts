import {AppThunkAction} from '../types';
import getEventListRequest, {GetEventListRequest} from '@/service/getEventList';
import {
  EventListAction,
  EventListActionTypes,
  EventListSearch,
  EventListSearchTimeValue,
} from './types';
import {thisMonth, thisWeek, today, tomorrow} from '@/utils/time';
import {toastResponse} from '@/service/request';
import {EventListWithStatus} from '../user/types';

export const setSearchAndFetchEventList =
  (data: EventListSearch | null): AppThunkAction =>
  async dispatch => {
    dispatch(setEventListSearch(data));
    dispatch(setEventListData({type: 'loading'}));
    const searchParams = getRequestData(data);
    const result = await getEventListRequest(searchParams);
    toastResponse(result);
    return dispatch(setEventListData(result));
  };

export const fetchEventData =
  (): AppThunkAction => async (dispatch, getState) => {
    dispatch(setEventListData({type: 'loading'}));
    const search = getState().eventList.search;
    const searchParams = getRequestData(search);
    const data = await getEventListRequest(searchParams);
    toastResponse(data);
    return dispatch(setEventListData(data));
  };

export const fetchEventDataMore =
  (): AppThunkAction => async (dispatch, getState) => {
    if (getState().eventList.more.type !== 'ok') {
      return getState();
    }
    dispatch(setEventListDataMore({type: 'loading'}));
    const search = getState().eventList.search;
    const oldData = getState().eventList.data;
    const searchParams = getRequestData(search, oldData);
    const data = await getEventListRequest(searchParams);
    toastResponse(data);
    return dispatch(setEventListDataMore(data));
  };
function getRequestData(
  search: EventListSearch | null,
  oldData?: EventListWithStatus,
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
  if (oldData?.type === 'ok') {
    result.offset = oldData.payload.events.length;
  }
  return result;
}
export const setEventListData = (
  data: EventListWithStatus,
): EventListAction => ({
  type: EventListActionTypes.SET_EVENT_LIST_DATA,
  payload: data,
});

export const setEventListDataMore = (
  data: EventListWithStatus,
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
