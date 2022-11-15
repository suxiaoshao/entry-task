import React from 'react';
import {Text, View} from 'react-native';
import {ChannelItem} from '../../service/getChannelList';
import styles from './styles';

export interface ChannelProps extends ChannelItem {}

export default function ({name}: ChannelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}
