import React from 'react';
import {Text, View} from 'react-native';
import TimeButton from '@/pages/Home/pages/Search/components/TimeInput/components/TimeButton';
import useI18n from '@/i18n/useI18n';
import styles from './styles';
import {EventListSearchTime} from '@/store/eventList/types';
import LaterButton from './components/Laterbutton';

export interface TimeInputProps {
  time: EventListSearchTime | undefined;
  setTime: (time: EventListSearchTime) => void;
}

export default function ({time, setTime}: TimeInputProps) {
  const t = useI18n();
  return (
    <>
      <View style={styles.title}>
        <Text style={styles.titleText}>{t('date')}</Text>
      </View>
      <View style={styles.timeList}>
        <TimeButton
          selected={time?.type === 'anytime'}
          onPress={() => setTime({type: 'anytime'})}>
          {t('anytime')}
        </TimeButton>
        <TimeButton
          selected={time?.type === 'today'}
          onPress={() => setTime({type: 'today'})}>
          {t('today')}
        </TimeButton>
        <TimeButton
          selected={time?.type === 'tomorrow'}
          onPress={() => setTime({type: 'tomorrow'})}>
          {t('tomorrow')}
        </TimeButton>
        <TimeButton
          selected={time?.type === 'thisWeek'}
          onPress={() => setTime({type: 'thisWeek'})}>
          {t('this_week')}
        </TimeButton>
        <TimeButton
          selected={time?.type === 'thisMonth'}
          onPress={() => setTime({type: 'thisMonth'})}>
          {t('this_month')}
        </TimeButton>
        <LaterButton time={time} setTime={setTime} />
      </View>
    </>
  );
}
