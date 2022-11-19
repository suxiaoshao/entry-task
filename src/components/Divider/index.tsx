import React from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';
import styles from './styles';

export interface DividerProps extends Omit<ViewProps, 'style'> {
  style?: StyleProp<ViewStyle>;
}

export default function ({style, ...props}: DividerProps) {
  return <View {...props} style={[styles.container, style]} />;
}
