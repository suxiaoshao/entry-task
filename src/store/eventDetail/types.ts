import {ResponseTypeWithStatus} from '@/hooks/useRequest';
import {CommentItem} from '@/service/getEventComments';
import {EventItem, UserItem} from '@/service/getEventList';
import {Enum} from '@/utils/types';

export type EventDetailState = {
  event: ResponseTypeWithStatus<EventDetail>;
  footerStatus: EventDetailFooterStatus;
};

export interface EventDetail extends EventItem {
  comments: CommentItem[];
  likes: UserItem[];
  participants: UserItem[];
}

export enum EventDetailActionTypes {
  SET_EVENT_DETAIL_DATA = 'SET_EVENT_DETAIL_DATA',
  SET_EVENT_DETAIL_FOOTER_STATUS = 'SET_EVENT_DETAIL_FOOTER_STATUS',
}

export type EventDetailAction =
  | Enum<
      EventDetailActionTypes.SET_EVENT_DETAIL_DATA,
      ResponseTypeWithStatus<EventDetail>
    >
  | Enum<
      EventDetailActionTypes.SET_EVENT_DETAIL_FOOTER_STATUS,
      EventDetailFooterStatus
    >;

export type EventDetailFooterStatus =
  | Enum<'init'>
  | Enum<'comment'>
  | Enum<'commentWithUser', UserItem>;
