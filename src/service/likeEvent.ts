import {appRequestWithoutResponse} from '@/service/request';

export async function likeEventRequest(id: number) {
  const data = await appRequestWithoutResponse<{}>(
    `/events/${id}/likes`,
    'POST',
  );
  return data;
}

export async function dislikeEventRequest(id: number) {
  const data = await appRequestWithoutResponse<{}>(
    `/events/${id}/likes`,
    'DELETE',
  );
  return data;
}
