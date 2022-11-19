import {AppThunkAction} from '../types';
import getEventListRequest, {
  GetEventListResponse,
} from '@/service/getEventList';
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

export const setEventListSearch = (data: EventListSearch): EventListAction => ({
  type: EventListActionTypes.SET_EVENT_LIST_SEARCH,
  payload: data,
});
