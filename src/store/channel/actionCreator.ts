import {AppThunkAction} from '../types';
import {ChannelListAction, ChannelListActionTypes} from './types';
import getChannelListRequest, {ChannelItem} from '@/service/getChannelList';
import {toastResponse} from '@/service/request';

export const fetchChannelData = (): AppThunkAction => async dispatch => {
  const data = await getChannelListRequest();
  toastResponse(data);
  if (data.type === 'ok') {
    return dispatch(setChannelListData(data.payload.channels));
  }
};

export const setChannelListData = (data: ChannelItem[]): ChannelListAction => ({
  type: ChannelListActionTypes.SET_CHANNEL_LIST_DATA,
  payload: data,
});
