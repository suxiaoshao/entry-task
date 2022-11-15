import {ChannelItem} from './getChannelList';
import appRequest from './request';

export interface GetEventListResponse {
  total: number;
  hasMore: boolean;
  events: EventItem[];
}

export interface EventItem {
  id: number;
  begin_time: string;
  end_time: string;
  name: string;
  me_going: boolean;
  me_likes: boolean;
  goings_count: number;
  likes_count: number;
  description: string;
  create_time: string;
  location_detail: string;
  images: string[];
  channel: ChannelItem;
  creator: {
    avatar: string;
    createdAt: string;
    email: string;
    id: number;
    updatedAt: string;
    username: string;
  };
}

export interface GetEventListRequest {
  channels?: string;
  offset?: number;
  limit?: number;
  before?: number;
  after?: number;
}

export default async function getEventListRequest() {
  const data = await appRequest<GetEventListRequest, GetEventListResponse>(
    '/events',
    'GET',
  );
  return data;
}
