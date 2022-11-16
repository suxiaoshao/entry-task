import {GetEventListResponse} from '@/service/getEventList';
import {ActionEnum} from '../types';
import {ChannelItem} from '@/service/getChannelList';

export type EventListState = {
  data: GetEventListResponse | null;
  search: EventListSearch;
};

export interface EventListSearch {
  channels?: number[];
  offset?: number;
  limit?: number;
  before?: number;
  after?: number;
}

export enum EventListActionTypes {
  SET_EVENT_LIST_DATA = 'SET_EVENT_LIST_DATA',
  SET_EVENT_LIST_SEARCH_CHANNELS = 'SET_EVENT_LIST_SEARCH_CHANNELS',
  SET_EVENT_LIST_SEARCH_TIME = 'SET_EVENT_LIST_SEARCH_TIME',
}

export type EventListAction =
  | ActionEnum<
      EventListActionTypes.SET_EVENT_LIST_DATA,
      GetEventListResponse | null
    >
  | ActionEnum<
      EventListActionTypes.SET_EVENT_LIST_SEARCH_CHANNELS,
      number[] | null
    >
  | ActionEnum<
      EventListActionTypes.SET_EVENT_LIST_SEARCH_TIME,
      Pick<EventListSearch, 'before' | 'after'>
    >;
