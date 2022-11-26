import {ResponseTypeWithStatus} from '@/hooks/useRequest';
import {DetailTabType} from '@/pages/Detail/components/Tab/hooks';
import {CommentItem} from '@/service/getEventComments';
import {EventItem, UserItem} from '@/service/getEventList';
import {Enum} from '@/utils/types';

export type EventDetailState = {
  event: ResponseTypeWithStatus<EventDetail>;
  footerStatus: EventDetailFooterStatus;
  tab: DetailTabType;
};

export interface EventDetail extends EventItem {
  comments: CommentItem[];
  likes: UserItem[];
  participants: UserItem[];
}

export enum EventDetailActionTypes {
  SET_EVENT_DETAIL_DATA = 'SET_EVENT_DETAIL_DATA',
  SET_EVENT_DETAIL_FOOTER_STATUS = 'SET_EVENT_DETAIL_FOOTER_STATUS',
  SET_EVENT_DETAIL_TAB = 'SET_EVENT_DETAIL_TAB',
}

export type EventDetailAction =
  | Enum<
      EventDetailActionTypes.SET_EVENT_DETAIL_DATA,
      ResponseTypeWithStatus<EventDetail>
    >
  | Enum<
      EventDetailActionTypes.SET_EVENT_DETAIL_FOOTER_STATUS,
      EventDetailFooterStatus
    >
  | Enum<EventDetailActionTypes.SET_EVENT_DETAIL_TAB, DetailTabType>;

export type EventDetailFooterStatus =
  | Enum<'init'>
  | Enum<'comment'>
  | Enum<'commentWithUser', UserItem>;
