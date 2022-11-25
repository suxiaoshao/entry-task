import Tab from '@/components/Tab';
import React from 'react';
import {ActiveType, useTabItem} from './hooks';

export interface TabProps {
  active: ActiveType;
  setActive: (value: ActiveType) => void;
}

export default function ({active, setActive}: TabProps) {
  const tabItem = useTabItem();
  return (
    <>
      <Tab<ActiveType> value={active} setActive={setActive}>
        {tabItem}
      </Tab>
    </>
  );
}
