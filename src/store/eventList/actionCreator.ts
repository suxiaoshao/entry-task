import {AppThunkAction} from '../types';
import {EventListAction, EventListActionTypes} from './types';
import getEventListRequest, {
  GetEventListResponse,
} from '../../service/getEventList';

export const fetchEventData = (): AppThunkAction => async dispatch => {
  const data = await getEventListRequest();
  return dispatch(setEventListData(data));
};

export const setEventListData = (
  data: GetEventListResponse | null,
): EventListAction => ({
  type: EventListActionTypes.SET_EVENT_LIST_DATA,
  payload: data,
});
