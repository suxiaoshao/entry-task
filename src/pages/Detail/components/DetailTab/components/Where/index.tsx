import useI18n from '@/i18n/useI18n';
import React from 'react';
import {Image, Text, View} from 'react-native';
import Title from '../Title';
import styles from './styles';

const mapImage = require('@assets/detail/map.png');

export interface WhereProps {
  location_detail: string;
  location: string;
}

export default function ({location, location_detail}: WhereProps) {
  const t = useI18n();
  return (
    <View style={styles.container}>
      <Title name={t('where')} />
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.locationDetail}>{location_detail}</Text>
      <Image source={mapImage} style={styles.image} />
    </View>
  );
}
