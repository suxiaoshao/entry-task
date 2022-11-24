import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export interface TitleProps {
  name: string;
}

export default function ({name}: TitleProps) {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}
