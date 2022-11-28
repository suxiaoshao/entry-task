import Tab from '@/components/Tab';
import {setEventDetailTab} from '@/store/eventDetail/actionCreator';
import {useAppDispatch, useAppSelector} from '@/store/types';
import React, {useCallback} from 'react';
import {DetailTabType, useTabItem} from './hooks';

export default function () {
  const tabItem = useTabItem();
  const active = useAppSelector(state => state.eventDetail.tab);
  const dispatch = useAppDispatch();
  const setActive = useCallback(
    (tab: DetailTabType) => dispatch(setEventDetailTab(tab)),
    [dispatch],
  );
  return (
    <>
      <Tab<DetailTabType> value={active} setActive={setActive}>
        {tabItem}
      </Tab>
    </>
  );
}
