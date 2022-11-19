import useI18n from '@/i18n/useI18n';
import {EventListSearchTime} from '@/store/eventList/types';
import {today} from '@/utils/time';
import React, {useCallback, useMemo} from 'react';
import {Image, View} from 'react-native';
import TimeButton from '../TimeButton';
import DateInput from './DateInput';
import styles from './styles';

const rightIcon = require('@assets/home/right.png');
const leftIcon = require('@assets/home/left.png');

export interface LaterButtonProps {
  time: EventListSearchTime | undefined;
  setTime: (time: EventListSearchTime) => void;
}

export default function ({time, setTime}: LaterButtonProps) {
  const t = useI18n();
  const selected = useMemo(() => time?.type === 'later', [time]);
  const onPress = useCallback(() => {
    setTime({type: 'later', payload: today()});
  }, [setTime]);

  return (
    <>
      <TimeButton selected={selected} onPress={onPress}>
        {t('later')}
      </TimeButton>
      {time?.type === 'later' && (
        <View style={styles.container}>
          <Image style={styles.icon} source={rightIcon} />
          <DateInput
            date={time.payload.after}
            onChangeDate={date => {
              setTime({
                type: 'later',
                payload: {
                  after: date,
                  before: time.payload.before,
                },
              });
            }}
            maxDate={time.payload.before}
          />
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
          </View>
          <Image style={styles.icon} source={leftIcon} />
          <DateInput
            end
            date={time.payload.before}
            onChangeDate={date => {
              setTime({
                type: 'later',
                payload: {
                  after: time.payload.after,
                  before: date,
                },
              });
            }}
            minDate={time.payload.after}
          />
          <View style={styles.triangle} />
        </View>
      )}
    </>
  );
}
