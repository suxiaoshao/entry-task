import React, {useMemo} from 'react';
import {View, Image, Text} from 'react-native';
import {EventItem} from '@/service/getEventList';
import {formatDate} from '@/utils/formatTime';
import styles from './styles';

const clockImage = require('@assets/home/clock.png');
export type TimeProps = Pick<EventItem, 'begin_time' | 'end_time'>;
export default function Time({begin_time, end_time}: TimeProps) {
  const timeText = useMemo(
    () => `${formatDate(begin_time)} - ${formatDate(end_time)}`,
    [begin_time, end_time],
  );
  return (
    <View style={styles.time}>
      <Image source={clockImage} style={styles.clockIcon} />
      <Text style={styles.timeText}>{timeText}</Text>
    </View>
  );
}
