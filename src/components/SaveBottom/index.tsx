import React from 'react';
import {View} from 'react-native';
import useStyles from './styles';

export default function () {
  const styles = useStyles();
  return <View style={styles.container} />;
}
