import {GetEventListResponse} from '../../service/getEventList';
import {ActionEnum} from '../types';

export type EventListState = {
  data: GetEventListResponse | null;
};

export enum EventListActionTypes {
  SET_EVENT_LIST_DATA = 'SET_EVENT_LIST_DATA',
}

export type EventListAction = ActionEnum<
  EventListActionTypes.SET_EVENT_LIST_DATA,
  GetEventListResponse | null
>;
