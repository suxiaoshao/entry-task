import {ChannelItem} from '@/service/getChannelList';
import {Enum} from '@/utils/types';

export type ChannelListState = {
  data: ChannelItem[];
};

export enum ChannelListActionTypes {
  SET_CHANNEL_LIST_DATA = 'SET_CHANNEL_LIST_DATA',
}

export type ChannelListAction = Enum<
  ChannelListActionTypes.SET_CHANNEL_LIST_DATA,
  ChannelItem[]
>;
