import useI18n from '@/i18n/useI18n';
import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const apiErrorLogo = require('@assets/common/api_error.png');

export default function () {
  const t = useI18n();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={apiErrorLogo} />
      <Text style={styles.text}>{t('api_error1')}</Text>
      <Text style={styles.text}>{t('api_error2')}</Text>
    </View>
  );
}
