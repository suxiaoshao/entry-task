import EventCard from '@/components/EventList/components/EventCard';
import React from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import Divider from '../Divider';
import {EventListWithStatus} from '@/store/user/types';
import ApiError from '../ApiError';
import Loading from '../Loading';
import Network from '../Network';
import {ResponseTypeWithStatus} from '@/hooks/useRequest';
import MoreStatus from './components/MoreStatus';
import Empty from '../Empty';

export interface EventListProps {
  data: EventListWithStatus;
  onEndReached: () => void;
  refetch: () => void;
  more: ResponseTypeWithStatus<{}>;
}

export default function ({data, onEndReached, refetch, more}: EventListProps) {
  switch (data.type) {
    case 'networkError':
      return <Network refetch={refetch} />;
    case 'apiError':
    case 'jsonError':
      return <ApiError />;
    case 'ok':
      return (
        <FlatList
          style={styles.container}
          contentContainerStyle={styles.content}
          renderItem={({item}) => <EventCard data={item} />}
          data={data.payload.events}
          ItemSeparatorComponent={ContentDivider}
          ListFooterComponent={
            <MoreStatus
              refetch={onEndReached}
              more={more}
              hasMore={data.payload.hasMore}
              hidden={data.payload.events.length === 0}
            />
          }
          // Prevent multiple fetch more requests
          onEndReached={
            data.payload.hasMore && more.type !== 'loading'
              ? onEndReached
              : undefined
          }
          onEndReachedThreshold={0.5}
          ListEmptyComponent={Empty}
          onRefresh={refetch}
          refreshing={more.type === 'loading'}
        />
      );
    case 'loading':
      return <Loading />;
    default:
      return <Loading />;
  }
}
function ContentDivider() {
  return <Divider style={styles.divider} />;
}
