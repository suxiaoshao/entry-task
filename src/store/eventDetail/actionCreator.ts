import {AppThunkAction} from '../types';
import {
  EventDetailAction,
  EventDetailActionTypes,
  EventDetail,
  EventDetailFooterStatus,
} from './types';
import {ResponseType, toastResponse} from '@/service/request';
import getEventRequest, {GetEventResponse} from '@/service/getEvent';
import getEventCommentsRequest, {
  GetEventCommentsResponse,
} from '@/service/getEventComments';
import getEventLikesRequest, {
  GetEventLikesResponse,
} from '@/service/getEventLikes';
import getEventParticipantsRequest, {
  GetEventParticipantsResponse,
} from '@/service/getEventParticipants';
import {ResponseTypeWithStatus} from '@/hooks/useRequest';
import {UserItem} from '@/service/getEventList';
import {DetailTabType} from '@/pages/Detail/components/Tab/hooks';

export const fetchEventDetailData =
  (id: number): AppThunkAction =>
  async dispatch => {
    dispatch(setEventDetailData({type: 'loading'}));
    dispatch(fetchEventDetailDataUnLoading(id));
  };
export const fetchEventDetailDataUnLoading =
  (id: number): AppThunkAction =>
  async dispatch => {
    const promises = [
      getEventRequest(id),
      getEventParticipantsRequest(id),
      getEventLikesRequest(id),
      getEventCommentsRequest(id),
    ] as const;
    const data = mapResponseList(await Promise.all(promises));
    toastResponse(data);
    if (data.type === 'ok') {
      const [detail, participants, likes, comments] = data.payload;
      const result: EventDetail = {
        ...detail.event,
        participants: participants.users,
        likes: likes.users,
        comments: comments.comments,
      };
      return dispatch(setEventDetailData({type: 'ok', payload: result}));
    }
  };
function mapResponseList([detail, participants, likes, comments]: [
  ResponseType<GetEventResponse>,
  ResponseType<GetEventParticipantsResponse>,
  ResponseType<GetEventLikesResponse>,
  ResponseType<GetEventCommentsResponse>,
]): ResponseType<
  [
    GetEventResponse,
    GetEventParticipantsResponse,
    GetEventLikesResponse,
    GetEventCommentsResponse,
  ]
> {
  if (detail.type !== 'ok') {
    return detail;
  }
  if (participants.type !== 'ok') {
    return participants;
  }
  if (likes.type !== 'ok') {
    return likes;
  }
  if (comments.type !== 'ok') {
    return comments;
  }
  return {
    type: 'ok',
    payload: [
      detail.payload,
      participants.payload,
      likes.payload,
      comments.payload,
    ],
  };
}
export const setEventDetailData = (
  data: ResponseTypeWithStatus<EventDetail>,
): EventDetailAction =>
  ({
    type: EventDetailActionTypes.SET_EVENT_DETAIL_DATA,
    payload: data,
  } as EventDetailAction);

export const setEventDetailFooterStatus = (
  data: EventDetailFooterStatus,
): EventDetailAction =>
  ({
    type: EventDetailActionTypes.SET_EVENT_DETAIL_FOOTER_STATUS,
    payload: data,
  } as EventDetailAction);

export const setEventDetailFooterStatusInit = (): EventDetailAction =>
  setEventDetailFooterStatus({type: 'init'});

export const setEventDetailFooterStatusComment = (
  user?: UserItem,
): EventDetailAction =>
  user
    ? setEventDetailFooterStatus({type: 'commentWithUser', payload: user})
    : setEventDetailFooterStatus({type: 'comment'});

export const setEventDetailTab = (tab: DetailTabType): EventDetailAction => ({
  type: EventDetailActionTypes.SET_EVENT_DETAIL_TAB,
  payload: tab,
});
