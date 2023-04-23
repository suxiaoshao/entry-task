import {
  ChannelListAction,
  ChannelListActionTypes,
  ChannelListState,
} from './types';

const initialState: ChannelListState = {data: []};

export default function channelReducer(
  state = initialState,
  action: ChannelListAction,
): ChannelListState {
  switch (action.type) {
    case ChannelListActionTypes.SET_CHANNEL_LIST_DATA:
      return {...state, data: action.payload};
    default:
      return state;
  }
}
