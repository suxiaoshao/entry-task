import {GetEventListResponse} from './getEventList';
import appRequest from './request';

export interface GetUserEventsRequest {
  type: GetUserEventsType;
  offset?: number;
  limit?: number;
}

export type GetUserEventsType = 'liked' | 'going' | 'past';

export default async function getUserEventsRequest(
  search: GetUserEventsRequest,
) {
  const searchParams = new URLSearchParams();
  Object.entries(search).forEach(([key, value]) => {
    if (value) {
      searchParams.append(key, value.toString());
    }
  });
  const data = await appRequest<undefined, GetEventListResponse>(
    `/user/events?${searchParams.toString()}`,
    'GET',
  );
  return data;
}
