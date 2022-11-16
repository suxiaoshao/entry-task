import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {ChannelItem} from '@/service/getChannelList';
import styles from './styles';

export interface ChannelProps extends ChannelItem, Omit<ViewProps, 'style'> {
  boxStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function ({name, boxStyle, textStyle, ...props}: ChannelProps) {
  return (
    <View {...props} style={[styles.container, boxStyle]}>
      <Text style={[styles.text, textStyle]}>{name}</Text>
    </View>
  );
}
