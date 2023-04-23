import {UserItem} from './getEventList';
import appRequest from './request';

export interface GetEventLikesResponse {
  users: UserItem[];
}

export default async function getEventLikesRequest(id: number) {
  const data = await appRequest<undefined, GetEventLikesResponse>(
    `/events/${id}/likes`,
    'GET',
  );
  return data;
}
