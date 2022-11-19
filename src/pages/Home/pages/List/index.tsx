import React, {useEffect} from 'react';
import {View} from 'react-native';
import {fetchEventData} from '../../../../store/eventList/actionCreator';
import {useAppDispatch} from '../../../../store/types';
import Content from './components/Content';
import Filter from './components/Filter';
import Header from './components/Header';
import styles from './styles';

export default function () {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchEventData());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <Header />
      <Filter />
      <Content />
    </View>
  );
}
