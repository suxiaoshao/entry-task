import React from 'react';
import {FlatList} from 'react-native';
import Divider from '../../../../../../components/Divider';
import SaveBottom from '../../../../../../components/SaveBottom';
import {useAppDispatch, useAppSelector} from '@/store/types';
import EventCard from '../EventCard';
import styles from './styles';
import {fetchEventDataMore} from '@/store/eventList/actionCreator';

export default function () {
  const events = useAppSelector(state => state.eventList.data?.events);
  const dispatch = useAppDispatch();
  return (
    <FlatList
      style={styles.container}
      renderItem={({item}) => <EventCard data={item} />}
      data={events}
      ItemSeparatorComponent={ContentDivider}
      ListFooterComponent={<SaveBottom />}
      onEndReached={() => dispatch(fetchEventDataMore())}
      onEndReachedThreshold={0.5}
    />
  );
}

function ContentDivider() {
  return <Divider style={styles.divider} />;
}
