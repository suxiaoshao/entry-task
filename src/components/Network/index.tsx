import useI18n from '@/i18n/useI18n';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const networkLogo = require('@assets/common/network.png');

export interface NetworkProps {
  refetch: () => void;
}
export default function ({refetch}: NetworkProps) {
  const t = useI18n();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={networkLogo} />
      <Text style={styles.text}>{t('network_error')}</Text>
      <Pressable onPress={refetch}>
        <Text style={styles.button}>{t('try_again')}</Text>
      </Pressable>
    </View>
  );
}
