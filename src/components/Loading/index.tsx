import useI18n from '@/i18n/useI18n';
import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const loadingLogo = require('@assets/common/loading.png');

export default function () {
  const t = useI18n();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={loadingLogo} />
      <Text style={styles.text}>{t('loading')}</Text>
    </View>
  );
}
