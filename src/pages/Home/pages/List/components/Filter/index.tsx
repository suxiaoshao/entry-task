import React from 'react';
import useI18n from '@/i18n/useI18n';
import {setSearchAndFetchEventList} from '@/store/eventList/actionCreator';
import {useAppDispatch, useAppSelector} from '@/store/types';
import {Pressable, Text, View} from 'react-native';
import useActiveText from '../../../Search/components/SubmitButton/useActiveText';
import styles from './styles';

export default function () {
  const count = useAppSelector(state => state.eventList.data?.total);
  const t = useI18n();
  const search = useAppSelector(state => state.eventList.search);
  const text = useActiveText(search?.time, search?.channels);
  const dispatch = useAppDispatch();
  return search ? (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.count}>{`${count} ${t('results')}`}</Text>
        <Pressable
          style={styles.clearContainer}
          onPress={() => {
            dispatch(setSearchAndFetchEventList(null));
          }}>
          <Text style={styles.clearText}>{t('clear')}</Text>
        </Pressable>
      </View>
      <Text style={styles.filter}>{text}</Text>
    </View>
  ) : null;
}
