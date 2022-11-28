import React from 'react';
import {Pressable, PressableProps, Text} from 'react-native';
import styles from './styles';

export interface TimeButtonProps extends PressableProps {
  children: string;
  selected?: boolean;
}

export default function ({children, selected, ...props}: TimeButtonProps) {
  return (
    <Pressable
      {...props}
      style={[styles.container, selected && styles.containerSelected]}>
      <Text style={[styles.text, selected && styles.textSelected]}>
        {children}
      </Text>
    </Pressable>
  );
}
