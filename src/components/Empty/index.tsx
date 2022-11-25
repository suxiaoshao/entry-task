import useI18n from '@/i18n/useI18n';
import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const emptyLogo = require('@assets/common/empty.png');

export default function () {
  const t = useI18n();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={emptyLogo} />
      <Text style={styles.text}>{t('no_data')}</Text>
    </View>
  );
}
