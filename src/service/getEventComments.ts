import {UserItem} from './getEventList';
import appRequest from './request';

export interface GetEventCommentsResponse {
  comments: CommentItem[];
}

export interface CommentItem {
  id: number;
  userId: number;
  comment: string;
  updatedAt: string;
  user: UserItem;
}

export default async function getEventCommentsRequest(id: number) {
  const data = await appRequest<undefined, GetEventCommentsResponse>(
    `/events/${id}/comments`,
    'GET',
  );
  return data;
}
