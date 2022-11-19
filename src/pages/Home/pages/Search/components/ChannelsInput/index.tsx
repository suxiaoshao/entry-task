import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from '@/store/types';
import useI18n from '@/i18n/useI18n';
import styles from './styles';
import SearchChannel from './SearchChannel';

export interface ChannelsInputProps {
  channels: number[] | undefined;
  setChannels: (channels: number[] | undefined) => void;
}

export default function ({channels, setChannels}: ChannelsInputProps) {
  const t = useI18n();
  const all_channels = useAppSelector(state => state.channelList?.data);
  const onChannelPress = useCallback(
    (id: number) => {
      // if channels is undefined
      if (channels === undefined) {
        setChannels([id]);
        return;
      }
      // if channels not include id
      if (!channels.includes(id)) {
        setChannels([...channels, id]);
        return;
      }
      // if channels include id and only one
      if (channels.length === 1) {
        setChannels(undefined);
        return;
      }
      // if channels include id and more than one
      setChannels(channels.filter(channel => channel !== id));
    },
    [channels, setChannels],
  );
  return (
    <>
      <View style={[styles.title, styles.channelTitle]}>
        <Text style={styles.titleText}>{t('channel')}</Text>
      </View>
      <View style={styles.channelList}>
        <SearchChannel
          name={t('all')}
          selected={channels?.length === 0}
          onPress={() => setChannels([])}
        />
        {all_channels?.map(channel => (
          <SearchChannel
            selected={channels?.includes(channel.id) ?? false}
            {...channel}
            key={channel.id}
            onPress={() => onChannelPress(channel.id)}
          />
        ))}
      </View>
    </>
  );
}
