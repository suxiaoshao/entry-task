import {AppThunkAction} from '../types';
import {ChannelListAction, ChannelListActionTypes} from './types';
import getChannelListRequest, {ChannelItem} from '@/service/getChannelList';

export const fetchChannelData = (): AppThunkAction => async dispatch => {
  const data = await getChannelListRequest();
  return dispatch(setChannelListData(data.channels));
};

export const setChannelListData = (data: ChannelItem[]): ChannelListAction => ({
  type: ChannelListActionTypes.SET_CHANNEL_LIST_DATA,
  payload: data,
});
