import React from 'react';
import {Pressable, PressableProps, Text} from 'react-native';
import styles from './styles';

export interface TimeButtonProps extends PressableProps {
  children: string;
}

export default function ({children, ...props}: TimeButtonProps) {
  return (
    <Pressable {...props} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}
