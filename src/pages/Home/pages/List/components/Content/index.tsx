import React, {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '@/store/types';
import EventList from '@/components/EventList';
import {
  fetchEventData,
  fetchEventDataMore,
} from '@/store/eventList/actionCreator';

export default function () {
  const dispatch = useAppDispatch();
  const onEndReached = useCallback(
    () => dispatch(fetchEventDataMore()),
    [dispatch],
  );
  const refetch = useCallback(() => dispatch(fetchEventData()), [dispatch]);
  const {data, more} = useAppSelector(state => state.eventList);
  return (
    <EventList
      refetch={refetch}
      data={data}
      more={more}
      onEndReached={onEndReached}
    />
  );
}
