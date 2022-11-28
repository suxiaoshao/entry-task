import React from 'react';
import ChannelsInput from '@/pages/Home/pages/Search/components/ChannelsInput';
import {useState} from 'react';
import {renderWithProviders} from '@tests/config/renderWithProviders';
import store from '@/store';
import {setChannelListData} from '@/store/channel/actionCreator';
import {channelsData} from '@mocks/store/channels';
import SearchChannel from '@/pages/Home/pages/Search/components/ChannelsInput/SearchChannel';
import {Text} from 'react-native';
import {act} from 'react-test-renderer';

describe('ChannelInput', () => {
  const Component = () => {
    const [channels, setChannels] = useState<number[]>();
    return <ChannelsInput channels={channels} setChannels={setChannels} />;
  };
  store.dispatch(setChannelListData(channelsData));
  const render = renderWithProviders(<Component />);
  const channelRender = render.root.findAllByType(SearchChannel);
  it('render', () => {
    expect(channelRender.length).toBe(11);
    channelRender.forEach((item, index) => {
      const text = item.findAllByType(Text)[0].props.children;
      expect(text).toBe(index >= 1 ? channelsData[index - 1].name : 'all');
    });
    expect(channelRender[2].props.selected).toBeFalsy();
  });
  it('input', () => {
    act(() => {
      channelRender[2].props.onPress();
    });
    expect(channelRender[2].props.selected).toBeTruthy();
    act(() => {
      channelRender[3].props.onPress();
    });
    expect(channelRender[3].props.selected).toBeTruthy();
    expect(channelRender[2].props.selected).toBeTruthy();
    act(() => {
      channelRender[3].props.onPress();
    });
    expect(channelRender[3].props.selected).toBeFalsy();
    act(() => {
      channelRender[0].props.onPress();
    });
    expect(channelRender[0].props.selected).toBeTruthy();
  });
});
