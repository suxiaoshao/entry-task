import {ResponseTypeWithStatus} from '@/hooks/useRequest';
import {CommentItem} from '@/service/getEventComments';
import {EventItem, UserItem} from '@/service/getEventList';
import {Enum} from '@/utils/types';

export type EventDetailState = ResponseTypeWithStatus<EventDetail>;

export interface EventDetail extends EventItem {
  comments: CommentItem[];
  likes: UserItem[];
  participants: UserItem[];
}

export enum EventDetailActionTypes {
  SET_EVENT_DETAIL_DATA = 'SET_EVENT_DETAIL_DATA',
}

export type EventDetailAction = Enum<
  EventDetailActionTypes.SET_EVENT_DETAIL_DATA,
  EventDetailState
>;
