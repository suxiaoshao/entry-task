import React, {useCallback} from 'react';
import {View} from 'react-native';
import {RouterData} from '@/components/AppRouter';
import Header from '@/components/Header';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import styles from './styles';
import BaseInfo from './components/BaseInfo';
import MeTab from './components/MeTab';
import EventList from '@/components/EventList';
import {useAppDispatch, useAppSelector} from '@/store/types';
import {fetchUserEventList} from '@/store/user/actionCreator';
import {useInitFetch, useUserEventList} from './hooks';

const homeIcon = require('@assets/common/home.png');

export default function () {
  const navigation = useNavigation<NavigationProp<RouterData>>();
  const dispatch = useAppDispatch();
  const tab = useAppSelector(state => state.user.tab);
  const onEndReached = useCallback(
    () => dispatch(fetchUserEventList(tab, false, true)),
    [dispatch, tab],
  );
  const refetch = useCallback(
    () => dispatch(fetchUserEventList(tab, true, false)),
    [dispatch, tab],
  );
  const [data, more] = useUserEventList();
  useInitFetch();
  return (
    <View style={styles.container}>
      <Header
        leftIcon={homeIcon}
        onLeftPress={() => navigation.navigate('Home')}
      />
      <BaseInfo />
      <MeTab />
      <EventList
        refetch={refetch}
        data={data}
        more={more}
        onEndReached={onEndReached}
      />
    </View>
  );
}
