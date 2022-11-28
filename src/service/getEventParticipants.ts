import {UserItem} from './getEventList';
import appRequest from './request';

export interface GetEventParticipantsResponse {
  users: UserItem[];
}

export default async function getEventParticipantsRequest(id: number) {
  const data = await appRequest<undefined, GetEventParticipantsResponse>(
    `/events/${id}/participants`,
    'GET',
  );
  return data;
}
