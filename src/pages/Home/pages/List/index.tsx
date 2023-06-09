import React, {useEffect} from 'react';
import {View} from 'react-native';
import {fetchEventData} from '@/store/eventList/actionCreator';
import {useAppDispatch} from '@/store/types';
import Content from './components/Content';
import Filter from './components/Filter';
import Header from '@/components/Header';
import styles from './styles';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const searchIcon = require('@assets/common/search.png');

export default function () {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(fetchEventData());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <Header
        leftIcon={searchIcon}
        onLeftPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
      />
      <Filter />
      <Content />
    </View>
  );
}
