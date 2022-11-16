import React from 'react';
import {FlatList} from 'react-native';
import Divider from '../../../../../../components/Divider';
import SaveBottom from '../../../../../../components/SaveBottom';
import {useAppSelector} from '../../../../../../store/types';
import EventCard from '../EventCard';
import styles from './styles';

export default function () {
  const events = useAppSelector(state => state.eventList.data?.events);
  return (
    <FlatList
      style={styles.container}
      renderItem={({item}) => <EventCard data={item} />}
      data={events}
      ItemSeparatorComponent={() => <Divider style={styles.divider} />}
      ListFooterComponent={<SaveBottom />}
    />
  );
}
