import {EventItem} from './getEventList';
import appRequest from './request';

export interface GetEventResponse {
  event: EventItem;
}

export default async function getEventRequest(id: number) {
  const data = await appRequest<undefined, GetEventResponse>(
    `/events/${id}`,
    'GET',
  );
  return data;
}
