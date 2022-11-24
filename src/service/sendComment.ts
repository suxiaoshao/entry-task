import appRequest from '@/service/request';

export interface SendCommentRequest {
  comment: string;
}

export default async function sendCommentRequest(id: number, comment: string) {
  const data = await appRequest<SendCommentRequest, {}>(
    `/events/${id}/comments`,
    'POST',
    {comment},
  );
  return data;
}
