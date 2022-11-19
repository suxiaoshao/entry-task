import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {ChannelItem} from '@/service/getChannelList';
import styles from './styles';

export interface ChannelProps
  extends Omit<ChannelItem, 'id'>,
    Omit<PressableProps, 'style'> {
  boxStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function ({name, boxStyle, textStyle, ...props}: ChannelProps) {
  return (
    <Pressable {...props} style={[styles.container, boxStyle]}>
      <Text style={[styles.text, textStyle]}>{name}</Text>
    </Pressable>
  );
}
