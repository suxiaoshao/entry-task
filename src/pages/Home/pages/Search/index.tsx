import useI18n from '@/i18n/useI18n';
import React from 'react';
import {Text, View} from 'react-native';
import useStyles from './styles';
import {useAppSelector} from '@/store/types';
import Channel from '@/components/Channel';
import TimeButton from '@/pages/Home/pages/Search/components/TimeButton';

export default function () {
  const styles = useStyles();
  const t = useI18n();
  const channels = useAppSelector(state => state.channelList?.data);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{t('date')}</Text>
      </View>
      <View style={styles.timeList}>
        <TimeButton>{t('anytime')}</TimeButton>
        <TimeButton>{t('today')}</TimeButton>
        <TimeButton>{t('tomorrow')}</TimeButton>
        <TimeButton>{t('this_week')}</TimeButton>
        <TimeButton>{t('this_month')}</TimeButton>
        <TimeButton>{t('later')}</TimeButton>
      </View>
      <View style={[styles.title, styles.channelTitle]}>
        <Text style={styles.titleText}>{t('channel')}</Text>
      </View>
      <View style={styles.channelList}>
        {channels?.map(channel => (
          <Channel
            {...channel}
            key={channel.id}
            boxStyle={styles.channelBox}
            textStyle={styles.channelText}
          />
        ))}
      </View>
    </View>
  );
}
