import React from 'react';
import {View} from 'react-native';
import useI18n from '../../i18n/useI18n';
import Header from './components/Header';
import styles from './styles';

export default function () {
  const t = useI18n();
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}
