import React, {LegacyRef} from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';
import styles from './styles';

export interface DividerProps extends Omit<ViewProps, 'style'> {
  style?: StyleProp<ViewStyle>;
}

function Divider({style, ...props}: DividerProps, ref: LegacyRef<View>) {
  return <View {...props} style={[styles.container, style]} ref={ref} />;
}

export default React.forwardRef(Divider);
