import appRequest from '@/service/request';

export interface ChannelItem {
  id: number;
  name: string;
}

export interface GetChannelListResponse {
  channels: ChannelItem[];
}

export default async function getChannelListRequest() {
  const data = await appRequest<{}, GetChannelListResponse>('/channels', 'GET');
  return data;
}
