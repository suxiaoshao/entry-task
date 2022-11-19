import useI18n from '@/i18n/useI18n';
import {setEventListSearch} from '@/store/eventList/actionCreator';
import {EventListSearchTime} from '@/store/eventList/types';
import {useAppDispatch} from '@/store/types';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {Pressable, Image, View, Text} from 'react-native';
import styles from './styles';
import useActiveText from './useActiveText';
const searchIcon = require('@/assets/home/search.png');
const searchActiveIcon = require('@/assets/home/search_active.png');

export interface SubmitButtonProps {
  time: EventListSearchTime | undefined;
  channels: number[] | undefined;
}

export default function ({time, channels}: SubmitButtonProps) {
  const t = useI18n();
  const active = useMemo(
    () => time !== undefined && channels !== undefined,
    [time, channels],
  );
  const activeText = useActiveText(time, channels);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  return (
    <Pressable
      style={[styles.button, active && styles.buttonActive]}
      onPress={() => {
        if (time !== undefined && channels !== undefined) {
          dispatch(setEventListSearch({time, channels}));
          navigation.dispatch(DrawerActions.closeDrawer());
        }
      }}
      disabled={!active}>
      <View style={styles.content}>
        <Image
          style={styles.contentImage}
          source={active ? searchActiveIcon : searchIcon}
        />
        <Text style={styles.contentText}>{t('search')}</Text>
      </View>
      {activeText && <Text style={styles.activeText}>{activeText}</Text>}
    </Pressable>
  );
}
