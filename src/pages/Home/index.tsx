import React from 'react';
import {View, Text} from 'react-native';
import useI18n from '../../i18n/useI18n';

export default function () {
  const t = useI18n();
  return (
    <View>
      <Text>{t('home_name')}</Text>
    </View>
  );
}
