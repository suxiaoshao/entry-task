import {ResponseTypeWithStatus} from '@/hooks/useRequest';
import {GetEventListRequest} from '@/service/getEventList';
import {Enum} from '@/utils/types';
import {EventListWithStatus} from '../user/types';

export type EventListState = {
  data: EventListWithStatus;
  search: EventListSearch | null;
  more: ResponseTypeWithStatus<{}>;
};

export type EventListSearchTimeValue = Pick<
  GetEventListRequest,
  'before' | 'after'
>;

export type EventListSearchTime =
  | Enum<'today'>
  | Enum<'tomorrow'>
  | Enum<'thisWeek'>
  | Enum<'thisMonth'>
  | Enum<'anytime'>
  | Enum<'later', EventListSearchTimeValue>;

export interface EventListSearch {
  channels: number[];
  time: EventListSearchTime;
}

export enum EventListActionTypes {
  SET_EVENT_LIST_DATA = 'SET_EVENT_LIST_DATA',
  SET_EVENT_LIST_SEARCH = 'SET_EVENT_LIST_SEARCH',
  SET_EVENT_LIST_DATA_MORE = 'SET_EVENT_LIST_DATA_MORE',
}

export type EventListAction =
  | Enum<EventListActionTypes.SET_EVENT_LIST_DATA, EventListWithStatus>
  | Enum<EventListActionTypes.SET_EVENT_LIST_SEARCH, EventListSearch | null>
  | Enum<EventListActionTypes.SET_EVENT_LIST_DATA_MORE, EventListWithStatus>;
