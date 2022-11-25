import React from 'react';
import Tab from '@/components/Tab';
import {useTabItem} from './hooks';
import {useAppDispatch, useAppSelector} from '@/store/types';
import {setUserTab} from '@/store/user/actionCreator';

export default function () {
  const tabItem = useTabItem();
  const active = useAppSelector(state => state.user.tab);
  const dispatch = useAppDispatch();
  return (
    <Tab setActive={value => dispatch(setUserTab(value))} value={active}>
      {tabItem}
    </Tab>
  );
}
