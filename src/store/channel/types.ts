import {ActionEnum} from '../types';
import {ChannelItem} from '@/service/getChannelList';

export type ChannelListState = {
  data: ChannelItem[];
};

export enum ChannelListActionTypes {
  SET_CHANNEL_LIST_DATA = 'SET_CHANNEL_LIST_DATA',
}

export type ChannelListAction = ActionEnum<
  ChannelListActionTypes.SET_CHANNEL_LIST_DATA,
  ChannelItem[]
>;
