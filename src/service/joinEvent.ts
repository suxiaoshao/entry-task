import {appRequestWithoutResponse} from '@/service/request';

export async function joinEventRequest(id: number) {
  const data = await appRequestWithoutResponse<{}>(
    `/events/${id}/participants`,
    'POST',
  );
  return data;
}

export async function leaveEventRequest(id: number) {
  const data = await appRequestWithoutResponse<{}>(
    `/events/${id}/participants`,
    'DELETE',
  );
  return data;
}
