import useI18n from '@/i18n/useI18n';
import {formatDateMiddle, formatTimeAP, formatTimeHour} from '@/utils/time';
import React from 'react';
import {Image, Text, View} from 'react-native';
import Title from '../Title';
import styles from './styles';

const rightIcon = require('@/assets/home/right.png');
const leftIcon = require('@/assets/home/left.png');

export interface WhenProps {
  begin_time: string;
  end_time: string;
}

export default function ({begin_time, end_time}: WhenProps) {
  const t = useI18n();
  return (
    <View style={styles.container}>
      <Title name={t('when')} />
      <View style={styles.content}>
        <View style={styles.item}>
          <View style={styles.date}>
            <Image style={styles.image} source={rightIcon} />
            <Text style={styles.text}>{formatDateMiddle(begin_time)}</Text>
          </View>
          <View style={styles.time}>
            <Text style={styles.hour}>{formatTimeHour(begin_time)}</Text>
            <Text style={styles.amAndPm}>{formatTimeAP(begin_time)}</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.item}>
          <View style={styles.date}>
            <Image style={styles.image} source={leftIcon} />
            <Text style={styles.text}>{formatDateMiddle(end_time)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
