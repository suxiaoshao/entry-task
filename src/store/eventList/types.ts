import {
  GetEventListRequest,
  GetEventListResponse,
} from '@/service/getEventList';
import {Enum} from '@/utils/types';

export type EventListState = {
  data: GetEventListResponse | null;
  search: EventListSearch;
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
}

export type EventListAction =
  | Enum<EventListActionTypes.SET_EVENT_LIST_DATA, GetEventListResponse | null>
  | Enum<EventListActionTypes.SET_EVENT_LIST_SEARCH, EventListSearch>;
